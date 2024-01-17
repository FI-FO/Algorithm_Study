function solution(board) {
    var answer = 0;
		var n = board.length;
		var arr = [];

		board.forEach((val, idx) => {
			arr[idx] = [...val];
		});

		for(var i = 0; i < n; i++) {
			for(var j = 0; j < n; j++) {
				if(board[i][j] === 1)  {
					// 좌상
					if(0 <= i-1 && 0 <= j-1) arr[i-1][j-1] = 1;
					// 좌
					if(0 <= i-1) arr[i-1][j] = 1;
					// 상
					if(0 <= j-1) arr[i][j-1] = 1;

					// 우
					if(i+1 < n) arr[i+1][j] = 1;
					// 하
					if(j+1 < n) arr[i][j+1] = 1;
					// 우하
					if(i+1 < n && j+1 < n) arr[i+1][j+1] = 1;

					// 좌하
					if(0 <= i-1 && j+1 < n) arr[i-1][j+1] = 1;
					// 우상
					if(0 <= j-1 && i+1 < n) arr[i+1][j-1] = 1;
				}
			}
		}
		
		for(var i = 0; i < n; i++) {
			for(var j = 0; j < n; j++) {
				if(arr[i][j] !== 1) {
					answer++;
				}
			}
		}

    return answer;
}

solution([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]]) // 16
solution([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 1, 0], [0, 0, 0, 0, 0]]) // 13
solution([[1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]]) // 0
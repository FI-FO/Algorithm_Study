function solution(n) {
    var answer = Array.from({ length: n }, () => Array.from({ length: n }));
		var num = 1; // 배열에 채워질 값 초기화
    var startRow = 0;
    var endRow = n - 1;
    var startCol = 0;
    var endCol = n - 1;

		while(startRow <= endRow && startCol <= endCol) {
			// 상단 행
			for(var i = startCol; i <= endCol; i++) {
				answer[startRow][i] = num
				num++;
			}
			startRow++;

			// 오른쪽 열
			for(var i = startRow; i <= endRow; i++) {
				answer[i][endCol] = num
				num++
			}
			endCol--;

			// 하단 행
			if(startRow <= endRow) {
				for (var i = endCol; i >= startCol; i--) {
					answer[endRow][i] = num++;
				}
				endRow--;
			}

			// 왼쪽 열
			if (startCol <= endCol) {
				for (var i = endRow; i >= startRow; i--) {
					answer[i][startCol] = num++;
				}
				startCol++;
			}
		}

		return answer;
}

solution(4);
/**
 * [
	* [1, 2, 3, 4],
	* [12, 13, 14, 5],
	* [11, 16, 15, 6],
	* [10, 9, 8, 7]
 * ]
 	*/

solution(5);
/**
 * [
	* [1, 2, 3, 4, 5],
	* [16, 17, 18, 19, 6],
	* [15, 24, 25, 20, 7],
	* [14, 23, 22, 21, 8],
	* [13, 12, 11, 10, 9]
 * ]
 */
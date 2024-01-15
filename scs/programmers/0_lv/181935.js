function solution(n) {
    var answer = 0;
		var arr = [];
		var i = n;
		
		while(i > 0) {
			arr.push(i);
			i--;
		}

		if(n % 2 === 0) {
			answer = arr.reduce((acc, cur) => {
				return cur % 2 === 0 ? acc += (cur * cur) : acc;
			}, 0);
		} else {
			answer = arr.reduce((acc, cur) => {
				return cur % 2 === 0 ? acc : acc += cur;
			}, 0);
		}

    return answer;
}

solution(7); // 16
solution(10); // 220
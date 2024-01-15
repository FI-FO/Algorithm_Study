function solution(a, b) {
		var answer = 0;
		const num1 = (`${a}` + `${b}`) * 1;
		const num2 = (`${b}` + `${a}`) * 1;
		
		if(num1 >= num2) {
			answer = num1;
		} else {
			answer = num2;
		}

    return answer;
}

solution(9, 91) // 991
solution(89, 8) // 898
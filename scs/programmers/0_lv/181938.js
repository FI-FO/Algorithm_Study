function solution(a, b) {
    var answer = 0;
		const num1 = (`${a}` + `${b}`) * 1;
		const num2 = 2 * a * b;

		if(num1 >= num2) {
			answer = num1;
		} else {
			answer = num2;
		}
		
    return answer;
}

solution(2, 91); // 364
solution(91, 2); // 912

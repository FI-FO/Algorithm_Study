function solution(number, n, m) {
    var answer = 0;
		if(number % n === 0 && number % m === 0) {
			answer = 1;
		}

    return answer;
}

solution(60, 2, 3) // 1
solution(55, 10, 5) // 0
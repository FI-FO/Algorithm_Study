function solution(n ,k) {
	let answer = 1;

	if(n % 2 !== 0 && k % 2 === 0) {
		return -1
	}

	let number = BigInt(n);
	while (number % BigInt(k) != 0) {
			number = BigInt(number.toString() + n.toString());
			answer++;
	}

	return answer;
}


console.log(solution(3, 7));
console.log(solution(22, 9));
console.log(solution(25, 15));
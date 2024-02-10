function solution(a, b, n) {
	let answer = 0;
	
	while(n >= a) {
		const quot = Math.floor(n / a) * b;
		const remain = n % a;
		n = quot + remain;
		answer += quot;
	}

	return answer;
}

console.log(solution(2, 1, 20)); // 19
console.log(solution(3, 1 , 20)); // 9
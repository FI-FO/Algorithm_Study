function solution(n) {
	let ans = 0;
	
	while(n !== 0) {
		if(n % 2 === 0) {
			n = n / 2;
		} else {
			n--;
			ans++;
		}
	}

	return ans;
}

console.log(solution(5)) // 2
console.log(solution(6)) // 2
console.log(solution(5000)) // 5
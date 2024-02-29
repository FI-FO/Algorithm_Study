function solution(n) {
	if(n === 0) return 0;
	let dp = new Array(n + 1);
	dp[1] = 1;
	dp[2] = 2;
	
	for(let i = 3; i <= n; i++) {
		dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
	}
	
	return dp[n];
}

console.log(solution(4)); // 5
console.log(solution(3)); // 3
// https://breathtaking-life.tistory.com/149

const readline = require("readline")

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

let input = []

rl.on("line", line => {
	input.push(line)
})

rl.on("close", () => {
	const n = parseInt(input.shift())
	const dp = new Array(n).fill(0)
	
	for(let i = 0; i < n; i ++) {
		const [t, p] = input[i].split(" ").map(num => parseInt(num))
		const cost = i + t
		if(cost > n) continue
		dp[i] +=  p
		console.log("===========")
		for(let j = cost; j < n; j++) {
			console.log(i, dp[i], "//", j, dp[j])
			dp[j] = Math.max(dp[i], dp[j])
		}
	}
	console.log("=====================")
	console.log(dp)
	console.log(Math.max(...dp))
})

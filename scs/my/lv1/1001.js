const readline = require("readline")

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

let input

rl.on("line", line => input = line)
rl.on("close", () => {
	const [a, b] = input.split(" ").map(num => parseInt(num))
	console.log(a - b)
})
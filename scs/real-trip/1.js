// Run by Node.js
// 숫자 뒤집기
// case 1) 123 : 321
// case 2) 789 : 987
// 7890 : 987로 0 제외해야함

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	line = line.split("").reverse().join("")
	line = parseInt(line)
	console.log(line)
	rl.close();
}).on("close", function() {
	process.exit();
});
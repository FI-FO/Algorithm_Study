// Run by Node.js
// 게임 확률 1% 올리기 위해서 몇판 해야하는 지 구하는거, 1억번 이상 못함
// case 1) 100 80 : 6
// case 2) 888 887 : X

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	line = line.split(" ")
	let m = parseInt(line[0])
	let n = parseInt(line[1])
	let per = Math.floor(n / m * 100)
	let want = Math.floor((n / m * 100)) + 1
	
	if(want > 99) {
		console.log("X")
		rl.close()
	}
	let count = 0
	while(per < want) {
		n += 1
		m += 1
		per = Math.floor((n / m * 100))
		count++
	}
	console.log(count)
	rl.close()
}).on("close", function() {
	process.exit();
});
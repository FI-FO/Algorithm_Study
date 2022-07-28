// Run by Node.js
// 배열 내 중복 제거, 처음값 n이 배열 갯수
// 결과 string으로 출력
// case 1) 5 4 3 3 2 6 : 2 4 6
// case 2) 잘 기억 안남...ㅠ 10 1 2 2 3 4 3 3 5 4 1 : 5

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let lineArr = []
let n

rl.on("line", function(line) {
	lineArr.push(line)
	n = lineArr[0]
	if(lineArr.length > n) {
		lineArr.shift()
		let resultArr = []
		lineArr.forEach((ele) => {
			const first = lineArr.indexOf(ele)
			const last = lineArr.lastIndexOf(ele)
			if(first === last) {
				resultArr.push(Number(ele))
			}
		})
		resultArr.sort()
		let result = resultArr.join(" ")
		console.log(result)
		rl.close()
	}
}).on("close", function() {
	process.exit();
});


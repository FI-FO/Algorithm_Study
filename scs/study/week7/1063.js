// https://velog.io/@y7y1h13/TIL-2022-03-24

const readline = require("readline")
 
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

let input = []

rl.on("line", line => {
	input.push(line)
})

const move = {
	R: [1, 0],
	L : [-1 , 0],
	B: [0 , -1],
	T: [0, 1],
	RT: [1, 1],
	LT: [-1, 1],
	RB: [1, -1],
	LB: [-1, -1]
}

rl.on("close", () => {
	let [king, stone, n] = input.shift().split(" ").map(init => init)
	n = parseInt(n)
	king = king.split("")
	king[0] = king[0].charCodeAt() - 64
	king[1] = parseInt(king[1])
	stone = stone.split("")
	stone[0] = stone[0].charCodeAt() - 64
	stone[1] = parseInt(stone[1])

	for(let i = 0 ; i < n; i++) {
		const [col, row] = move[input[i]]
		const kx = king[0] + col
		const ky = king[1] + row

		if(kx > 0 && kx < 9 && ky > 0 && ky < 9) {
			console.log("king", king[0], king[1], "///", kx, ky)
			if(kx === stone[0] && ky === stone[1]) {
				const sx = stone[0] + col
				const sy = stone[1] + row
				console.log("stone", stone[0], stone[1], "///", sx, sy)
				if(sx > 0 && sx < 9 && sy > 0 && sy < 9) {
					king[0] = kx
					king[1] = ky
					stone[0] = sx
					stone[1] = sy
				}
			} else {
				king[0] = kx
				king[1] = ky
			}
		}
	}

	console.log(`${String.fromCharCode(king[0] + 64)}${king[1]}\n${String.fromCharCode(stone[0] + 64)}${stone[1]}`)
})
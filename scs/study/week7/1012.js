// https://www.jongung.com/209

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
	const t = parseInt(input.shift())

	for (let i = 0; i < t; i++) {
		const [m, n, k] = input.shift().split(" ").map(num => parseInt(num))
		const field = new Array(m).fill(0).map(() => new Array(n).fill(0))
		const visited = new Array(m).fill(0).map(() => new Array(n).fill(0))
		let count = 0
		
		input.splice(0, k).forEach((pos) => {
			const [posX, posY] = pos.split(" ").map(num => parseInt(num))
			field[posX][posY] = 1
		})
		
		for(let x = 0; x < m; x++) {
			for(let y = 0; y < n; y++) {
				if(field[x][y] === 1 && visited[x][y] === 0) {
					dfs(x, y)
					count++
				}
			}
		}
		console.log(count)

		function dfs(x, y) {
			let dx = [0, 1, 0, -1]
			let dy = [1, 0, -1, 0]
			visited[x][y] = 1

			for(let i = 0; i < 4; i++) {
				let arroundX = x + dx[i]
				let arroundY = y + dy[i]
				if(arroundX >= 0 && arroundY >= 0 && arroundX < m && arroundY < n) {
					if(field[arroundX][arroundY] === 1 && visited[arroundX][arroundY] === 0) {
						dfs(arroundX, arroundY)
					}
				}
			}
		}
	}
})

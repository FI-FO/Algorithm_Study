function solution(arr) {
	let count = 0;
	
	for(let i = 0; i < arr.length; i++) {
		let rowHasB = false;
		let colHasB = false;
		console.log('====')
		
		for (let j = 0; j < arr[i].length; j++) {
			console.log(i, j, arr[i][j])
			
			if(arr[i][j] === "B") {
				if(i + 1 < arr.length && arr[i + 1][j] === "B") {
					rowHasB = true;
				} else {
					console.log('row', i + 1, j)
				}
				if(j + 1 < arr[i].length && arr[i][j + 1] === "B") {
					colHasB = true;
				} else {
					console.log('col', i, j + 1)
				}

				if (!rowHasB && !colHasB) count++;
			}
		}
		console.log(i, rowHasB, colHasB)
		if(!rowHasB && !colHasB) count++;
	}

	return count;
}

// console.log(solution([
// 	["W","W","B"],
// 	["W","B","W"],
// 	["B","W","W",]
// ])) // 3
console.log(solution([
	["W","W","B"],
	["W","B","W"],
	["W","B","W"],
])) // 1
// console.log(solution([
// 	["B","B","W"],
// 	["B","B","W"],
// 	["B","B","W"],
// ])) // 0
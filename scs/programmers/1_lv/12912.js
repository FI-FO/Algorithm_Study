function solution(a, b) {
		if(a === b) return a;
    
		let min = a > b ? b : a;
		let max = a > b ? a : b;
		let arr = [];
		
    for(let i = min; i <= max; i++) {
			arr.push(i);
		}

		return arr.reduce((acc, cur) => (acc + cur), 0);
}

console.log(solution(3, 5)) // 12
console.log(solution(3, 3)) // 3
console.log(solution(5, 3)) // 12
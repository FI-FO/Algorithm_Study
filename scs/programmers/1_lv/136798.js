function solution(number, limit, power) {
	let answer = 0;
	const map = new Map();
	
	while(number !== 0) {
		let i = 1;
		let count = 0;

		for(let i = 1; i <= Math.sqrt(number); i++) {
			if(i === Math.sqrt(number)) {
				count += 1;
			} else if(number % i == 0) {
				count += 2;
			}
		}

		map.set(number, count > limit ? power : count);
		number--;
	}
	
	for(let val of map.values()) {
		answer += val;
	}

	return answer;
}

console.log(solution(5, 3, 2)) // 10
console.log(solution(10, 3, 2)) // 21
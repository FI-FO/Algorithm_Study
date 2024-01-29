function solution(brown, yellow) {
	for(let i = 1 ; i <= yellow ; i++) {
		const yellowHeight = yellow / i;
		if(Number.isInteger(yellowHeight)) {
			if((i * 2 + yellowHeight * 2 + 4) === brown) {
				return [yellowHeight + 2, i + 2]
			}
		}
	}
}

const case1 = solution(10, 2); // [4, 3]
console.log(case1);
const case2 = solution(8, 1); // [3, 3]
console.log(case2);
const case3 = solution(24, 24); // [8, 6]
console.log(case3); 

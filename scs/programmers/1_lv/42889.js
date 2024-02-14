function solution(N, stages) {
	const hashMap = new Map();

	for(let i = 1; i <= N; i++) {
		let stageClear = 0;
		let stageFail = 0;

		for(let j = 0; j < stages.length; j++) {
			if(i <= stages[j]) {
				stageClear += 1;
			}
		}

		for(let k = 0; k < stages.length; k++) {
			if(stages[k] == i) {
				stageFail += 1;
			}
		}

		hashMap.set(i, stageFail / stageClear);
	}

	return [...hashMap].sort((a, b) => b[1] - a[1]).map(e => e[0]);;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])) // [3,4,2,1,5]
console.log(solution(4, [4, 4, 4, 4, 4])) // [4,1,2,3]
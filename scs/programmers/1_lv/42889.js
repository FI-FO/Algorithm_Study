function solution(N, stages) {
	const hashMap = new Map();

	for(let i = 1; i <= N; i++) {
		const clear = stages.filter((stage) => stage >= i).length;
		const fail = stages.filter((stage) => stage === i).length;
		hashMap.set(i, fail / clear);
	}

	return [...hashMap].sort((a, b) => b[1] - a[1]).map(e => e[0]);;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])) // [3,4,2,1,5]
console.log(solution(4, [4, 4, 4, 4, 4])) // [4,1,2,3]
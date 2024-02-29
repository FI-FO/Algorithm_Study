function solution(k, tangerine) {
	let answer = 0;
	const tangerineMap = tangerine.reduce((acc, cur) => {
		return acc.set(cur, (acc.get(cur) | 0) + 1);
	}, new Map());
	const tangerArray = [];
	
	for([key, value] of tangerineMap) {
		tangerArray.push([key, value]);
	}
	tangerArray.sort((a, b) => b[1] - a[1]);

	for(let i = 0; i < tangerArray.length; i++) {
		if(k <= 0) break;

		k -= tangerArray[i][1];
		answer++;
	}
	
	return answer;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3])); // 3
console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3])); // 2
console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3])); // 1
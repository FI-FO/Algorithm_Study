function solution(k, m, score) {
	let answer = 0;
	score.sort((a, b) => b - a);
	
	for(let i = 0; i < score.length; i = i + m) {
		const slice = score.slice(i, i + m);
		if(slice.length === m) {
			answer += Math.min(...slice) * m;
		}
	}

	return answer;
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1])); // 8
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2])); // 33
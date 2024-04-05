function solution(hasppiness) {
	let answer = 0;
	
	for(let i = 0; i < hasppiness.length; i++) {
		const group = hasppiness.slice(0, i + 1);
		const sum = group.reduce((acc, cur) => acc + cur, 0);
		const avg = sum / group.length;
		
		if(avg >= 8) {
			answer++;
		}
	}

	return answer;
}

console.log(solution([9,10,6,0,4,6,10])) // 3
console.log(solution([6, 10, 3, 9, 4, 10, 3, 9, 3, 10, 6])) // 9
console.log(solution([5, 3, 1, 3, 6, 4])) // 0

function solution(d, budget) {
	const apply = d.sort((a, b) => a - b).filter(v => {
		if(budget - v >= 0) {
			budget -= v;
			return true;
		}
		return false;
	});
	return apply.length;
}

console.log(solution([1,3,2,5,4], 9)) // 3
console.log(solution([2,2,3,3], 10)) // 4
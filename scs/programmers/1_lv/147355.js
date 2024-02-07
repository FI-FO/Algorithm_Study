function solution(t, p) {
	const arr = [];
	
	for(let i = 0; i < t.length; i++) {
		if(t.substr(i, p.length).length === p.length) {
			arr.push(t.substr(i, p.length) * 1);
		}
	}

	return arr.reduce((acc, cur) => (cur <= Number(p) ? acc += 1 : acc), 0);
}

console.log(solution("3141592", "271")) // 2
console.log(solution("500220839878", "7")) // 8
console.log(solution("10203", "15")) // 3
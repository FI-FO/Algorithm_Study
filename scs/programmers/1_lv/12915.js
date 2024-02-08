function solution(strings, n) {
	const sort = strings.sort((a, b) => {
		if(a[n] > b[n]) {
			return 1
		} else {
			if(a[n] === b[n]) {
				return a > b ? 1 : -1;
			}
			return -1
		}
	});
	
	return sort;
}

console.log(solution(["sun", "bed", "car"], 1)) // ["car", "bed", "sun"]
console.log(solution(["abce", "abcd", "cdx"], 2)) // ["abcd", "abce", "cdx"]
function solution(s) {
	const elements = s.slice(2, -2).split("},{").map((str) => {
		return str.split(",").map(str => parseInt(str));
	}).sort((a, b) => a.length - b.length);
	const setter = elements.reduce((acc, cur) => {
		cur.forEach((num) => acc.add(num));
		return acc
	}, new Set());
	return Array.from(setter);
}

const sol1 = solution("{{2},{2,1},{2,1,3},{2,1,3,4}}") // [2, 1, 3, 4]
console.log(sol1);
const sol2 = solution("{{1,2,3},{2,1},{1,2,4,3},{2}}") // [2, 1, 3, 4]
console.log(sol2);
const sol3 = solution("{{20,111},{111}}") // [111, 20]
console.log(sol3);
const sol4 = solution("{{123}}") // [123]
console.log(sol4);
const sol5 = solution("{{4,2,3},{3},{2,3,4,1},{2,3}}") // [3, 2, 4, 1]
console.log(sol5);
function solution(name, yearning, photo) {
	const nameMap = name.reduce((acc, cur, idx) => {
		return acc.set(cur, yearning[idx]);
	}, new Map());

	return photo.map((nameList) => {
		return nameList.reduce((acc, cur) => (acc + (nameMap.get(cur) | 0)), 0);
	})
}

console.log(solution(
	["may", "kein", "kain", "radi"],
	[5, 10, 1, 3],
	[["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]]
)); // [19, 15, 6]
console.log(solution(
	["kali", "mari", "don"],
	[11, 1, 55],
	[["kali", "mari", "don"], ["pony", "tom", "teddy"], ["con", "mona", "don"]]
)); // [67, 0, 55]
console.log(solution(
	["may", "kein", "kain", "radi"],
	[5, 10, 1, 3],
	[["may"],["kein", "deny", "may"], ["kon", "coni"]]
)); // [5, 15, 0]
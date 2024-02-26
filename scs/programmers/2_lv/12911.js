function solution(n) {
	const nCount = n.toString(2).replaceAll('0', '').length;
	let i = n + 1;
	while(i > n  && i <= 1000000) {
		const iCount = i.toString(2).replaceAll('0', '').length;
		if(iCount === nCount) {
			return i;
		}
		i++;
	}
}

console.log(solution(78)); // 83
console.log(solution(15)); // 23
function solution(n, m, section) {
	let answer = 0;
	let arr = Array.from({ length: n + 1 }).map((_, idx) => {
		return section.includes(idx);
	});
	
	for(let i = 1; i < arr.length; i++) {
		if(arr[i]) {
			for(let j = i; j <= i + m - 1; j++) {
				arr[j] = false;
			}
			answer++;
		}
	}

	return answer;
}

console.log(solution(8, 4, [2, 3, 6])); // 2
console.log(solution(5, 4, [1, 3])); // 1
console.log(solution(4, 1, [1, 2, 3, 4])); // 4
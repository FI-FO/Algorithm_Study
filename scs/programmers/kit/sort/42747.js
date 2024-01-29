function solution(citations) {
		citations.sort();
    let answer = 0;

		for (let i = 1; i <= citations.length; i++) {
			let filter = citations.filter((value) => value >= i);
			if (i <= filter.length) {
				answer = i;
			}
		}

    return answer;
}

console.log(solution([3, 0, 6, 1, 5])) // 3
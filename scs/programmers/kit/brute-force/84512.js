function solution(word) {
    let answer = 0;
		let tempArr = [];
		const alphabet = ['A', 'E', 'I', 'O', 'U'];

		function DFS(current, depth) {
			if (depth <= 5) {
				tempArr.push(current); // 현재 문자열을 tempArr에 추가

				for (let i = 0; i < alphabet.length; i++) {
					DFS(current + alphabet[i], depth + 1);
				}
			}
    }

		DFS('', 0);
		
		answer = tempArr.indexOf(word);
    return answer;
}

const case1 = solution("AAAAE") // 6
// const case2 = solution("AAAE") // 10
// const case3 = solution("I") // 1563
// const case4 = solution("EIO") // 1189
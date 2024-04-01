function solution(numbers, target) {
	let answer = 0;
	
	function DFS(sum, depth) {
		if(depth === numbers.length) {
			if(sum === target) {
				answer += 1;
			}
			return;
		}

		DFS(sum + numbers[depth], depth + 1);
		DFS(sum - numbers[depth], depth + 1);
	}

	DFS(0, 0);

	return answer;
}

const sol1 = solution([1, 1, 1, 1, 1], 3); // 5
console.log(sol1);
const sol2 = solution([4, 1, 2, 1], 4); // 2
console.log(sol2);
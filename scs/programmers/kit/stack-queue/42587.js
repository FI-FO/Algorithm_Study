function solution(priorities, location) {
		let answer = 0;
		let max = Math.max(...priorities);
		const pos_map = priorities.map((_, i) => i);
		

		while(priorities.length !== 0) {
			if(priorities[0] < max) {
				priorities.push(priorities.shift());
				pos_map.push(pos_map.shift());
			} else {
				answer++;
				priorities.shift();
				if(pos_map.shift() === location) {
					return answer;
				}

				max = Math.max(...priorities);
			}
		}
		
		return answer;
}

const case1 = solution([2, 1, 3, 2], 2) // 1
const case2 = solution([1, 1, 9, 1, 1, 1], 0) // 5
function solution(numbers) {
	const stack = [];
	const result = new Array(numbers.length).fill(-1);

	numbers.forEach((number) => {
		const stackLastIdx = stack.length - 1;

		if(number > stack[stackLastIdx]) {
			let backTrakingIdx = 0;

			while(number > stack[stackLastIdx - backTrakingIdx]) {
				if(result[stackLastIdx - backTrakingIdx] === -1) {
					result[stackLastIdx - backTrakingIdx] = number;
				}

				backTrakingIdx++;
			}
		}

		stack.push(number);
	})
	
	return result;
}

const sol1 = solution([2, 3, 3, 5]); // [3, 5, 5, -1]
console.log(sol1);
const sol2 = solution([9, 1, 5, 3, 6, 2]); // [-1, 5, 6, 6, -1, -1]
console.log(sol2);
function solution(food) {
	const arr = [];

	food.shift();
	food.forEach((val, idx) => {
		let size = val % 2 !== 0 ? val - 1 : val;
		size = size / 2;
		while(size >= 1) {
			arr.push(idx + 1);
			size--;
		}
	})

	return `${[...arr].join('')}` + '0' + `${[...arr].reverse().join('')}`;
}

console.log(solution([1, 3, 4, 6])) // 1223330333221
console.log(solution([1, 7, 1, 2])) // 111303111
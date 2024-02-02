function solution(numbers) {
		return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter((val) => {
			if(!numbers.includes(val)) return val;
		}).reduce((acc, cur) => (acc + cur), 0);
}

console.log(solution([1,2,3,4,6,7,8,0])) // 14
console.log(solution([5,8,4,0,6,7,9])) // 6
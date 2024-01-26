function solution(numbers) {
		var answer = '';
		const sort = numbers.map((num) => num.toString()).sort((a, b) => {
			return (b + a) - (a + b);
		});
		console.log(sort)

		answer = sort.join('');
    return answer[0] === "0" ? "0" : answer;
}

console.log(solution([6, 10, 2])) // "6210"
// console.log(solution([3, 30, 34, 5, 9])) // "9534330"
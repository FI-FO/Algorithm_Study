function solution(numbers) {
	let answer = [];
	
	for(let i = 0; i < numbers.length; i++) {
		for(let j = i + 1; j < numbers.length; j++) {
			const sum = numbers[i] + numbers[j]
			if(!answer.includes(sum)) {
				answer.push(sum);
			}
		}
	}

	return answer.sort((a, b) => a - b);
}

console.log(solution([2,1,3,4,1])) // [2,3,4,5,6,7]
console.log(solution([5,0,2,7])) // [2,5,7,9,12]
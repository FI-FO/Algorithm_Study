function getLCM(a, b) {
	const getGCD = (a, b) => a % b === 0 ? b : getGCD(b, a % b);
	return a * b / getGCD(a, b);
}

function solution(arr) {
	arr.sort((a, b) => a - b);	
	let lcm = arr.pop();
	
	while(arr.length !== 0) {
		lcm = getLCM(arr[arr.length - 1], lcm);
		arr.pop();
	}

	return lcm;
}

console.log(solution([2, 6, 8, 14])); // 168
console.log(solution([1, 2, 3])); // 6
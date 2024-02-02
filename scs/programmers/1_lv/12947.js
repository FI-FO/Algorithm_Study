function solution(x) {
		const sum = x.toString().split("").map((num) => num *1).reduce((acc, cur) => (acc + cur), 0);
    return x % sum === 0;
}

console.log(solution(10)) // true
console.log(solution(12)) // true
console.log(solution(11)) // false
console.log(solution(13)) // false
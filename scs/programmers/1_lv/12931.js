function solution(n) {
		return `${n}`.split("").map((num) => num * 1).reduce((acc, cur) => (acc + cur), 0);
}

const case1 = solution(123); // 6
const case2 = solution(987); // 24
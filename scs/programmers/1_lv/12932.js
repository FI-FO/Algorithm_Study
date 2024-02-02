function solution(n) {
		return `${n}`.split("").map((num) => num * 1).reverse();
}

const case1 = solution(12345); // [5, 4, 3, 2, 1]
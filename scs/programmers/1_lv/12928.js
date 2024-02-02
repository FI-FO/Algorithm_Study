function solution(n) {
		let arr = [];
		for(let i = 1; i <= n; i++) {
			if(n % i === 0) {
				arr.push(i);
			}
		}
		
		return arr.reduce((acc, cur) => (acc + cur), 0);
}

const case1 = solution(12); // 28
const case2 = solution(5); // 6
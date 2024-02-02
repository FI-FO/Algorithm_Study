function solution(x, n) {
    let answer = [];
		
		while(n !== 0) {
			answer.push(x * n);
			n--;
		}
		
		return answer.sort((a, b) => {
			return a > 0 && b > 0 ? a - b : b - a;
		});
}

const case1 = solution(2, 5); // [2,4,6,8,10]
const case2 = solution(4, 3); // [4,8,12]
const case3 = solution(-4, 2); // [-4, -8]
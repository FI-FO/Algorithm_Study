function solution(prices) {
		let answer = new Array(prices.length).fill(0);
		let stack = [];
		
		for(let i = 0; i < prices.length; i++) {
			while(stack.length && prices[i] < prices[stack[stack.length - 1]]) {
				let pop = stack.pop();
				answer[pop] = i - pop;
			}
			stack.push(i);
		}

		while(stack.length) {
			let pop = stack.pop();
			answer[pop] = prices.length - pop - 1;
		}

		return answer;
}

const case1 = solution([1, 2, 3, 2, 3]) // [4, 3, 1, 1, 0]
function solution(n) {
    let answer = n;
		let i = 1;

		while(i !== n) {
			if(n % i === 1) {
				if(i < answer) {
					answer = i;
				}
			}
			i++;
		}

    return answer;
}

const case1 = solution(10) // 3
const case2 = solution(12) // 11
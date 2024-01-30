function solution(arr) {
    const answer = [arr[0]];

		for(let i = 1; i < arr.length; i++) {
			if(arr[i - 1] !== arr[i]) {
				answer.push(arr[i]);
			}
		}
    
    return answer;
}

const case1 = solution([1,1,3,3,0,1,1]); // [1,3,0,1]
const case2 = solution([4,4,4,3,3]) // [4,3]
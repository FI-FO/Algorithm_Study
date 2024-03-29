function solution(absolutes, signs) {
    let answer = 0;
		for(let i = 0; i < absolutes.length; i++) {
			const num = signs[i] ? absolutes[i] : absolutes[i] * -1;
			answer += num;
		}
    return answer;
}

console.log(solution([4,7,12], [true,false,true])) // 9
console.log(solution([1,2,3], [false,false,true])) // 0
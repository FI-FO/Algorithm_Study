function solution(k, score) {
	let answer = [];
	let dayArr =[];
	let day = 0;

	while(day < score.length) {
		dayArr.push(score[day]);
		
		if(day < k) {
			answer.push(Math.min(...dayArr));
		} else {
			const min = Math.min(...dayArr);
			dayArr.splice(dayArr.indexOf(min), 1);
			dayArr.sort((a , b) => b - a);
			answer.push(dayArr[k - 1]);
		}
		
		day++;
	}
	
	return answer;
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200])); // [10, 10, 10, 20, 20, 100, 100]
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000])); // [0, 0, 0, 0, 20, 40, 70, 70, 150, 300]
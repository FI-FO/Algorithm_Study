function solution(people, limit) {
	let answer = 0;
	people.sort((a, b) => b - a);
	let peopleCnt = people.length;
	for(let i = 0; i < peopleCnt; i++) {
		if(people[i] + people[peopleCnt-1] <= limit) {
			peopleCnt--;
		}
		answer++;
	}
	return answer;
}

console.log(solution([70, 50, 80, 50], 100)); // 3
console.log(solution([70, 80, 50], 100)); // 3
console.log(solution([30, 40, 60, 70], 100))
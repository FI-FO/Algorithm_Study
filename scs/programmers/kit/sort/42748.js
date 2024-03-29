// function solution(array, commands) {
//     const answer = commands.map(([i,j,k])=>array.slice(i-1,j).sort((a,b)=>a-b)[k-1])
//     return answer
// }

function solution(array, commands) {
    let answer = [];
		
		commands.forEach((command) => {
			const [i, j, k] = command;
			let arr = array.slice(i - 1, j).sort();
			answer.push(arr[k - 1]);
		})
	
    return answer;
}

console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]));
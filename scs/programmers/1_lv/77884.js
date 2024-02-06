function solution(left, right) {
    let answer = 0;
		let map = new Map();

		for(let i = left; i <= right; i++) {
			let j = 1;
			while(j <= i) {
				if(i % j === 0) {
					map.set(i, (map.get(i) || 0) + 1);
				}
				j++;
			}
		}

		for(let [key, val] of map) {
			if(val % 2 === 0) {
				answer += key;
			} else {
				answer -= key;
			}
		}

    return answer;
}

console.log(solution(13, 17)) // 43
console.log(solution(24, 27)) // 52
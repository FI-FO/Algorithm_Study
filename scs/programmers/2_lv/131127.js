function solution(want, number, discount) {
	let answer = 0;

	for(let i = 0; i < discount.length; i++) {
		let list = discount.slice(i, i + 10);
		
		if(list.length !== 10) {
			break;
		}

		let flag = true;
		want.forEach((wantItem, wantIdx) => {
			let count = 0;
			let wantCount = number[wantIdx];

			list.forEach((discountItem) => {
				if(wantItem === discountItem) {
					count++;
				}
			})

			if(count !== wantCount) {
				flag = false;
				return;
			}
		})

		if(flag) {
			answer++;
		}
	}
	
	return answer;
}

console.log(solution(["banana", "apple", "rice", "pork", "pot"],
[3, 2, 2, 2, 1],
["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"]
)); // 3
console.log(solution(["apple"],
[10],
["banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana"]
)); // 0
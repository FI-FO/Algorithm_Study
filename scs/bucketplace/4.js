function solution(cards, slotSize) {
	cards.sort((a, b) => a - b);

	if(cards.length % slotSize !== 0) {
		return false;
	}

	let arr = new Array(cards.length / slotSize).fill(0).map(() => new Array(slotSize));
	console.log(arr);
	let stack = [];

	for(let i = 0; i < cards.length; i++) {
		for(let j = i + 1; j < cards.length; j++) {
			console.log(cards[i], cards[j]);
			if(cards[j] - cards[i] === 1) {
				arr
			}
		}
	}
	console.log(stack);
	

	return stack.length === 0;
}

console.log(solution([5,3,4,4], 2)); // true;
// console.log(solution([5,3,2,5], 2)); // false;
// console.log(solution([2,3,4,5], 3)); // false;
console.log(solution([2,3,4,4,5,6], 3)); // true;
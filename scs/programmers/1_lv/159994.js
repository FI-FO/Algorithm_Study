function solution(cards1, cards2, goal) {
	const arr = [...goal];
	arr.forEach((val) => {
		if(val === [...cards1].shift()) {
			cards1.shift();
			goal.shift();
		}
		if(val === [...cards2].shift()) {
			cards2.shift();
			goal.shift();
		}
	});

	return goal.length === 0 ? 'Yes' : 'No';
}

console.log(solution(["i", "drink", "water"], ["want", "to"], ["i", "want", "to", "drink", "water"])); // Yes
console.log(solution(["i", "water", "drink"], ["want", "to"], ["i", "want", "to", "drink", "water"])); // No
console.log(solution(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"], ["string", "or", "integer"], ["string", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j"])); // Yes
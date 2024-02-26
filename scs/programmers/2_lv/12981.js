function solution(n, words) {
	let stack = [words[0]];

	for(let i = 1; i < words.length; i++) {
		const beforeWord = words[i - 1];
		const currentWord = words[i];
		const personIndex = (i % n) + 1;
		const currentRound = Math.floor((stack.length / n)) + 1;

		if(stack.includes(currentWord)) {
			return [personIndex, currentRound];
		} else {
			stack.push(currentWord);
		}

		if(beforeWord[beforeWord.length - 1] !== currentWord[0]) {
			return [personIndex, currentRound];
		}
	}
	
	return [0, 0];
}

console.log(solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"])) // [3, 3]
console.log(solution(5, ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"])) // [0, 0]
console.log(solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])) // [1, 3]
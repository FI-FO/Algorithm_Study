function solution(s) {
	const numberList = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

	numberList.forEach((number, index) => {
		s = s.split(number).join(index);
	})
	
	return Number(s);
}

// console.log(solution("one")) // 1
// console.log(solution("one4")) // 14
// console.log(solution("one4seveneight")) // 1478
// console.log(solution("23four5six7")) // 234567
console.log(solution("2three45sixseven")) // 234567
// console.log(solution("123")) // 123
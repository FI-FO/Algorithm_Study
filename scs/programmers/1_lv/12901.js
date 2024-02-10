function solution(a, b) {
	const weeks = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
	const year = 2016;
	const month = a < 10 ? `0${a}` : `${a}`;
	const day = b < 10 ? `0${b}` : `${b}`;
	return weeks[new Date(`${year}-${month}-${day}`).getDay()];
}

console.log(solution(5, 24)); // "TUE"
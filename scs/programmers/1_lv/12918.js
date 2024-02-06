function solution(s) {
	return (s.length === 4 || s.length === 6) ?
	!s.split("").some((str) => isNaN(str))
	: false;
}

console.log(solution("a234")) // false
console.log(solution("1234")) // true
console.log(solution("0x16")) // false
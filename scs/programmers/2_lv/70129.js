function solution(s) {
	let exchangeCount = 0;
	let zeroCount = 0;
	while(s !== "1") {
		const bin = s.split("").filter((n) => n === "1").join("");
		zeroCount += s.length - bin.length;
		exchangeCount++;
		s = bin.length.toString(2);
	}

	return [exchangeCount, zeroCount];
}

console.log(solution("110010101001")); // [3,8]
console.log(solution("01110")); // [3,3]
console.log(solution("1111111")); // [4,1]
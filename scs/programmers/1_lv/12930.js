function solution(s) {
	return s.split(" ").map((str) => {
		return str.split("").map((word, index) => {
			return index % 2 === 0 ? word.toUpperCase() : word.toLowerCase();
		}).join("");
	}).join(" ");
}

console.log(solution("try hello world")) // "TrY HeLlO WoRlD"


function solution(s) {
	return s.split(" ").map((str) => {
		return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
	}).join(" ");
}

console.log(solution("3people unFollowed me")); // "3people Unfollowed Me"
console.log(solution("for the last week")); // "For The Last Week"
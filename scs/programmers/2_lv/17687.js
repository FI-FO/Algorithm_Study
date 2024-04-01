function solution(n, t, m, p) {
	let words = "";
	let answer = "";

	for(let i = 0; i < t * m; i++) {
		words += i.toString(n)
	}
	
	for(let i = p - 1; i < t * m; i += m) {
		answer += words[i].toUpperCase();
	}
	
	return answer;
}

const sol1 = solution(2, 4, 2, 1); // 0111
console.log(sol1, sol1 === "0111");
const sol2 = solution(16, 16, 2, 1); // 02468ACE11111111
console.log(sol2, sol2 === "02468ACE11111111");
const sol3 = solution(16, 16, 2, 2); // 13579BDF01234567
console.log(sol3, sol3 === "13579BDF01234567");
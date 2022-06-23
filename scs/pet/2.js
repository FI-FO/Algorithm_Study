function solution(s) {
	var answer = 0
	var cnt = {}

	for(var i = 0; i < s.length; i++) {
		cnt[s[i]] = 0
	}
	for(var i = 0; i < s.length; i++) {
		cnt[s[i]] += 1
	}
	for(let word in cnt) {
		if(cnt[word] % 2 !== 0) answer++
	}
	
	return answer
}

var s1 = "aabbbccd"
var s2 = "abebeaedeac"

console.log(solution(s1))
console.log(solution(s2))
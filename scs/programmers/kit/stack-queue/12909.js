function solution(s){
	let stack = 0;

	for(let i = 0; i < s.length; i++) {
		if(s[i] === '(') stack++;
		else stack--;

		if(stack < 0) return false;
	}

	return stack === 0 ? true : false;
}

// const case1 = solution("()()"); // true;
// const case2 = solution("(())()"); // true;
// const case3 = solution(")()("); // false;
// const case4 = solution("(()("); // false;
const case5 = solution("())((()))(()") // false;
function solution(s){
		const upper = s.toUpperCase().split("");
		const mapper = new Map();

		for(let w of upper) {
			mapper.set(w, (mapper.get(w) || 0) + 1);
		}

		return mapper.get("P") === mapper.get("Y");
}

const case1 = solution("pPoooyY"); // true
const case2 = solution("Pyy"); // false
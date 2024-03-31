function clustering(str) {
	let temp = [];

	for(let i = 0; i < str.length - 1; i++) {
		let s = str.slice(i, i + 2);

		// 영문자로 된 글자 쌍만 유효
		if(/^[A-Z]+$/.test(s)) {
				temp.push(s);
		}
	}

	return temp;
}

function solution(str1, str2) {
	str1 = str1.toUpperCase();
	str2 = str2.toUpperCase();
	str1 = clustering(str1);
	str2 = clustering(str2);

	let set = new Set([...str1, ...str2]);
	let min = 0;
	let max = 0;
	set.forEach((setEle) => {
		const has1 = str1.filter((ele1) => ele1 === setEle).length;
		const has2 = str2.filter((ele2) => ele2 === setEle).length;

		min += Math.min(has1, has2);
		max += Math.max(has1, has2);
	});

	if(min == 0 && max == 0) {
		return 65536;
	}

	return Math.floor(min / max * 65536);
}


const sol1 = solution('FRANCE', 'french'); // 16384
console.log(sol1);
const sol2 = solution('handshake', 'shake hands'); // 65536
console.log(sol2);
const sol3 = solution('aa1+aa2', 'AAAA12'); // 43690
console.log(sol3);
const sol4 = solution('E=M*C^2', 'e=m*c^2'); // 65536
console.log(sol4);
function solution(n, k) {
	return n.toString(k).split('0')
	.reduce((acc, cur) => {
		if(!cur) return acc;
		if (cur <= 1) return acc;
		if (cur <= 3) return acc + 1;
		if (cur % 2 === 0 || cur % 3 === 0) return acc;

		let i = 5;
    while (i * i <= cur) {
        if (cur % i === 0 || cur % (i + 2) === 0) return acc;
        i += 6;
    }

		return acc + 1

	}, 0);
}

const sol1 = solution(437674, 3); // 3
console.log(sol1);
const sol2 = solution(110011, 10); // 2
console.log(sol2);
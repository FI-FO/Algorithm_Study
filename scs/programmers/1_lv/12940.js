function solution(n, m) {
		let getGCD = (a, b) => (b > 0 ? getGCD(b, a % b) : a);
		let GCD = getGCD(n, m);
		let LCM = n * m / GCD;

    return [GCD, LCM];
}

console.log(solution(3, 12)) // [3, 12]
console.log(solution(2, 5)) // [1, 10]
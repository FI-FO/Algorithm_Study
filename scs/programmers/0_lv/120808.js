function solution(numer1, denom1, numer2, denom2) {
		var numer = denom1 * numer2 + denom2 * numer1;
		var denom = denom1 * denom2;

		var getGCD = (a, b) => (b ? getGCD(b, a % b) : a);
		var gcd = getGCD(numer, denom);

		numer = numer / gcd;
		denom = denom / gcd;
    
    return [numer, denom];
}

solution(1, 2, 3, 4) // [5, 4]
solution(9, 2, 1, 3) // [29, 6]
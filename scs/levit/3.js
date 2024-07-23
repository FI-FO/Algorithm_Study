function solution(n, r, c) {
		// 대각선 인덱스(0부터 시작)
    let diagIdx = r + c -2;
		console.log("diagIdx", diagIdx);

		// 대각선 시작점 계산
    let startValue;

    if(diagIdx < n) {
        startValue = diagIdx * (diagIdx + 1) / 2 + 1;
    } else {
        startValue = n * n - (2 * n - 1 - diagIdx) * (2 * n - diagIdx) / 2 + 1;
    }
		console.log("startValue", startValue);

    let value;

    if(diagIdx % 2 === 0) {
				// 짝수줄: 왼쪽 위에서 시작
        if(diagIdx < n) {
            value = startValue + c - 1;
        } else {
            value = startValue + n - r;
        }
    } else {
				// 홀수줄: 오른쪽 아래에서 시작
        if(diagIdx < n) {
            value = startValue + r - 1;
        } else {
            value = startValue + n - c;
        }
    }

		console.log("value", value);

    return value;
}

console.log(solution(5,3,2)); // 9
console.log(solution(6,5,4)); // 29
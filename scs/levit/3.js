function solution(n, r, c) {
    let diagIdx = r + c -2;

    let startValue;

    if(diagIdx < n) {
        startValue = diagIdx * (diagIdx + 1) / 2 + 1;
    } else {
        startValue = n * n - (2 * n - 1 - diagIdx) * (2 * n - diagIdx) / 2 + 1;
    }

    let value;

    if(diagIdx % 2 === 0) {
        if(diagIdx < n) {
            value = startValue + c - 1;
        } else {
            value = startValue + n - r;
        }
    } else {
        if(diagIdx < n) {
            value = startValue + r - 1;
        } else {
            value = startValue + n - c;
        }
    }


    return value;
}

console.log(solution(5,3,2)); // 9
console.log(solution(6,5,4)); // 29
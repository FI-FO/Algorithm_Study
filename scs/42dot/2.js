function solution(n) {
    let len = 1;
    let count = 9;
    let start = 1;

    while (n > len * count) {
        n -= len * count;
        len++;
        count *= 10;
        start *= 10;
    }

    start += Math.floor((n - 1) / len);
    const digitIndex = (n - 1) % len;

    return parseInt(start.toString()[digitIndex]);
}

console.log(solution(5)); // 5
console.log(solution(15)); // 2
function solution(num, n) {
    return num % n === 0 ? 1 : 0;
}

solution(98, 2); // 1
solution(34, 3); // 0
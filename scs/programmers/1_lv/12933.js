function solution(n) {
    return n.toString().split("").map((num) => num * 1).sort((a, b) => b - a).join("") * 1;
}

console.log(solution(118372)) // 873211
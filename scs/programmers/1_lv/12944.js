function solution(arr) {
    return arr.reduce((acc, cur) => (acc + cur), 0) / arr.length;
}

const case1 = solution([1,2,3,4]); // 2.5
const case2 = solution([5,5]); // 5
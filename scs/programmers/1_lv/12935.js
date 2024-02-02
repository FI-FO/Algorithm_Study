function solution(arr) {
    const filter = arr.filter((num) => num !== Math.min(...arr));
    return filter.length === 0 ? [-1] : filter;
}

console.log(solution([4,3,2,1])) // [4,3,2]
console.log(solution([10])) // [-1]
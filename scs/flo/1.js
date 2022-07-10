function solution(nums) {
    let answer = 0
    let number = 0

    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                number = nums[i] + nums[j] + nums[k]
                let count=0
                for (let l = 1; l <= number; l++) {
                    if (number % l ==0) count++;
                }
                if(count == 2) answer++;
            }
        }
    }
    
    return answer;
}

console.log(solution([1, 2, 3, 4]))
console.log(solution([1, 2, 7, 6, 4]))
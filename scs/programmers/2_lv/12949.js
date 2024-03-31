function solution(arr1, arr2) {
    let answer = [];
    let x_length = arr1.length;
    let y_length = arr2[0].length;
    let x1_length = arr1[0].length;

    // arr1.length만큼 반복
    for(let i=0; i<x_length; i++) {
        let temp = [];

        // arr2.length만큼 반복
        for(let j=0; j<y_length; j++) {

            let sum = 0;
            // 내부 행렬 계산 반복
            for(let k=0; k<x1_length; k++) {
                sum += arr1[i][k] * arr2[k][j];
            }

            temp.push(sum)
        }

        answer.push(temp)
    }

    return answer;
}

console.log(solution(
	[[1, 4], [3, 2], [4, 1]],
	[[3, 3], [3, 3]]
)) // [[15, 15], [15, 15], [15, 15]]
console.log(solution(
	[[2, 3, 2], [4, 2, 4], [3, 1, 4]],
	[[5, 4, 3], [2, 4, 1], [3, 1, 1]]
)) // [[22, 22, 11], [36, 28, 18], [29, 20, 14]]
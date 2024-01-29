function getPermutation(arr, num) { // 순열 구현
    const result = [];
    if (num === 1) return arr.map((v) => [v]);
    
    arr.forEach((select, i, origin) => {
        const remainder = [...origin.slice(0, i), ...origin.slice(i + 1)];
        const permutation = getPermutation(remainder, num - 1);
        const combine = permutation.map((v) => [select, ...v]);
        result.push(...combine);
    });
    
    return result;
}

function solution(k, dungeons) {
    let answer = -1;
		const permutation = getPermutation(dungeons, dungeons.length);

		permutation.forEach((v) => {
        let copy_k = k;
        let cnt = 0;
        v.forEach((x) => {
            if (copy_k >= x[0]) { // 남은 피로도가 필요 피로도보다 크거나 같으면
                copy_k -= x[1];	// 남은 피로도 - 소모 피로도 
                cnt++;			// 던전 클리어 횟수 증가
            }
        })
        answer = Math.max(answer, cnt); // 최댓값 구하기
    })

    return answer;
}

const case1 = solution(80, [[80,20],[50,40],[30,10]]); // 3
console.log(case1);
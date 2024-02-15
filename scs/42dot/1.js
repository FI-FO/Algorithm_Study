function solution(pairs) {
    let count = 0;
    const pairMap = new Map();

    for (const pair of pairs) {
        const key1 = pair[0] + ',' + pair[1];
        const key2 = pair[1] + ',' + pair[0];

        if (pairMap.has(key1)) {
            count += pairMap.get(key1);
        }
        if (pairMap.has(key2)) {
            count += pairMap.get(key2);
        }

        pairMap.set(key1, (pairMap.get(key1) || 0) + 1);
    }

    return count;
}

console.log(solution([[1,3],[3,1],[3,5],[2,5],[5,3]])); // 2
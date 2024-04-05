function solution(grid) {
    let maxIslandSize = 0;
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    // BFS 함수 정의
    function bfs(row, col) {
        let queue = [[row, col]];
        let islandSize = 0;

        while (queue.length) {
            const [r, c] = queue.shift();
            if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] === 0) {
                continue;
            }
            islandSize++;
            grid[r][c] = 0; // 방문한 노드는 0으로 표시하여 중복 방문 방지
            for (let i = 0; i < directions.length; i++) {
								const [dx, dy] = directions[i];
                queue.push([r + dx, c + dy]);
            }
        }

        return islandSize;
    }

    // 모든 지점에 대해 BFS 수행하여 가장 큰 섬의 크기 찾기
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                maxIslandSize = Math.max(maxIslandSize, bfs(i, j));
            }
        }
    }

    return maxIslandSize;
}

console.log(solution([
    [1,1,0,0],
    [1,1,0,0],
    [0,0,0,1],
    [0,0,1,1]
])); // 출력: 4

function solution(n, water) {
    let grid = Array.from({ length: n }, () => Array(n).fill(0));
    let visited = Array.from({ length: n }, () => Array(n).fill(false));
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    for (let [x, y] of water) {
        grid[x - 1][y - 1] = 1;
    }

    function dfs(x, y) {
        visited[x][y] = true;
        for (let [dx, dy] of directions) {
            let newX = x + dx;
            let newY = y + dy;
            if (newX >= 0 && newX < n && newY >= 0 && newY < n && !visited[newX][newY] && grid[newX][newY] === 0) {
                dfs(newX, newY);
            }
        }
    }

    let personCount = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (!visited[i][j] && grid[i][j] === 0) {
                dfs(i, j);
                personCount++;
            }
        }
    }

    return personCount;
}

// 예제 테스트 케이스
// console.log(solution(4, [[3, 2]])); // 1
console.log(solution(4, [[2, 3], [3, 2], [4, 3]])); // 3
// console.log(solution(4, [[1, 2], [2, 3], [3, 1], [3, 4]])); // 3
// console.log(solution(3, [[1, 3], [2, 1], [3, 3]])); // 2


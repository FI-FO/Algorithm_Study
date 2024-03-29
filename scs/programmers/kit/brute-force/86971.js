function solution(n, wires) {
  let answer = Number.MAX_SAFE_INTEGER;
  let visited = Array.from({ length: n + 1 }, () => 0);
  let count = 1;
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  for (let [a, b] of wires) {
    graph[a][b] = 1;
    graph[b][a] = 1;
  }

  function DFS(L) {
    for (let i = 1; i <= n; i++) {
      if (visited[i] === 0 && graph[L][i] === 1) {
        visited[L] = 1;
        count++;
        DFS(i);
        visited[L] = 0;
      }
    }
  }

  for (let [a, b] of wires) {
    graph[a][b] = 0;
    graph[b][a] = 0;
    count = 1;
    DFS(1);
    graph[a][b] = 1;
    graph[b][a] = 1;
    answer = Math.min(answer, Math.abs(n - count - count));
  }
  return answer;
}

const case1 = solution(9, [[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]]) // 3
// const case2 = solution(4, [[1,2],[2,3],[3,4]]) // 0
// const case3 = solution(7, [[1,2],[2,7],[3,7],[3,4],[4,5],[6,7]]) // 1
// console.log(case1, case2, case3);
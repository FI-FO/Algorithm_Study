// 최단거리 구할 땐 BFS
function solution(maps) {
    let answer = 1;
    // 위(0, 1) 오른쪽(1, 0) 아래(0, -1) 왼쪽(-1, 0) 
    let dx = [0, 1, 0, -1];
    let dy = [1, 0, -1, 0];

    // 방문했는지 확인
    let visited = maps;

    // 가로, 세로 크기 구하기
    let n = maps.length;
    let m = maps[0].length;

    // bfs에 사용할 queue 생성
    let queue = [];
    queue.push([0, 0]);
    visited[0][0] = 0;

    while(queue.length > 0) {
        let size = queue.length;
        // queue 안의 모든 경우 하나씩 확인 
        for(let i = 0; i < size; i++) {
            let [x, y] = queue.shift();

            // 해당 queue 좌표의 상, 하, 좌, 우 확인하기 위해
            for(let i=0; i<4; i++) {
                let nx = x + dx[i];
                let ny = y + dy[i];

                // 맵을 벗어나지 않기, 이동할 위치가 막혀 있지 않기
                if(nx >= 0 && nx < n && ny >= 0 && ny < m && visited[nx][ny] === 1) {
                    // 목적지 좌표 도착 시 리턴 (4, 4)
                    if(nx == n-1 && ny == m-1) {
                        return answer+1;
                    }

                    // 이동 가능한 위치인 경우 해당 좌표를 Queue에 추가
                    queue.push([nx, ny]);

                    // 해당 위치 방문 표시
                    visited[nx][ny] = 0;
                }
            }
        }
        answer += 1;
    }

    return -1;
}

const sol1 = solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]); // 11
console.log(sol1);
const sol2 = solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]]); // -1
console.log(sol2);
import java.util.*

//시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
//2 초	256 MB	71620	22870	14035	29.104%
//문제
//세로 R칸, 가로 C칸으로 된 표 모양의 보드가 있다. 보드의 각 칸에는 대문자 알파벳이 하나씩 적혀 있고, 좌측 상단 칸 (1행 1열) 에는 말이 놓여 있다.
//
//말은 상하좌우로 인접한 네 칸 중의 한 칸으로 이동할 수 있는데, 새로 이동한 칸에 적혀 있는 알파벳은 지금까지 지나온 모든 칸에 적혀 있는 알파벳과는 달라야 한다. 즉, 같은 알파벳이 적힌 칸을 두 번 지날 수 없다.
//
//좌측 상단에서 시작해서, 말이 최대한 몇 칸을 지날 수 있는지를 구하는 프로그램을 작성하시오. 말이 지나는 칸은 좌측 상단의 칸도 포함된다.
//
//입력
//첫째 줄에 R과 C가 빈칸을 사이에 두고 주어진다. (1 ≤ R,C ≤ 20) 둘째 줄부터 R개의 줄에 걸쳐서 보드에 적혀 있는 C개의 대문자 알파벳들이 빈칸 없이 주어진다.
//
//출력
//첫째 줄에 말이 지날 수 있는 최대의 칸 수를 출력한다.
//
//예제 입력 1
//2 4
//CAAB
//ADCB
//예제 출력 1
//3
//예제 입력 2
//3 6
//HFDFFB
//AJHGDH
//DGAGEH
//예제 출력 2
//6
//예제 입력 3
//5 5
//IEFCJ
//FHFKC
//FFALF
//HFGCF
//HMCHH
//예제 출력 3
//10

data class Direction(val x: Int, val y: Int, val visited: Array<Array<Boolean>>, val alphabetSet: MutableSet<Char>, val tryCount: Int = 1)

fun main() = with(Scanner(System.`in`)) {
    val RC = nextLine().split(" ")
    val R = RC[0].toInt()
    val C = RC[1].toInt()
    var answer = 0
    val charArr: Array<CharArray>  = Array<CharArray>(R + 1) {
        CharArray(C + 1) {
            'a'
        }
    }

    for (i in 1..R) {
        val row = nextLine().toCharArray()
        for (j in row.indices) {
            charArr[i][j+1] = row[j]
        }
    }

    val boardQueue: Queue<Direction> = LinkedList()
    boardQueue.add( Direction(1, 1, Array<Array<Boolean>>(R + 1) {
        Array<Boolean>(C + 1) {
            false
        }
    }, mutableSetOf<Char>()))
    while (boardQueue.isNotEmpty()) {
        val board = boardQueue.poll()
        val curX = board.x
        val curY = board.y
        val visited = board.visited.clone()
        val alphabetSet =
            mutableSetOf<Char>().apply { addAll(board.alphabetSet) }
            board.alphabetSet
        alphabetSet.add(charArr[curX][curY])
        if (answer < board.tryCount) {
            answer = board.tryCount
        }
        if (curX + 1 <= R  && !visited[curX + 1][curY] && !alphabetSet.contains(charArr[curX + 1][curY])) {
            boardQueue.add(Direction(curX + 1, curY, visited.clone(), alphabetSet, board.tryCount + 1))
        }
        if (curX - 1 >= 1 && !visited[curX - 1][curY] && !alphabetSet.contains(charArr[curX - 1][curY])) {
            boardQueue.add(Direction(curX - 1, curY, visited.clone(), alphabetSet, board.tryCount + 1))
        }
        if (curY - 1 >= 1  && !visited[curX][curY - 1] && !alphabetSet.contains(charArr[curX][curY - 1])) {
            boardQueue.add(Direction(curX, curY - 1, visited.clone(), alphabetSet, board.tryCount + 1))
        }
        if (curY + 1 <= C  && !visited[curX][curY + 1] && !alphabetSet.contains(charArr[curX][curY + 1])) {
            boardQueue.add(Direction(curX, curY + 1, visited.clone(), alphabetSet, board.tryCount + 1))
        }
    }
    println(answer)

}


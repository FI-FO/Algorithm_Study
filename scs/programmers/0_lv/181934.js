function solution(ineq, eq, n, m) {
    var answer = 0;

		if(eq === "=") {
			if(ineq === ">") {
				answer = n >= m ? 1 : 0;
			} else if(ineq === "<") {
				answer = n <= m ? 1 : 0;
			}
		} else if(eq === "!") {
			if(ineq === ">") {
				answer = n > m ? 1 : 0;
			} else if(ineq === "<") {
				answer = n < m ? 1 : 0;
			}
		}

    return answer;
}

solution("<", "=", 20, 50); // 1
solution(">", "!", 41, 78); // 0
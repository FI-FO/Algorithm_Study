function solution(quiz) {
    var answer = [];
		
		quiz.forEach((q) => {
			var qList = q.split(" ");
			var [x, y, z] = qList.filter((item, index) => index % 2 === 0 && item).map((item) => Number(item));
			var [calc, equal] = qList.filter((item, index) => index % 2 !== 0 && item);
			
			if(calc === "+") {
				if(x + y === z) {
					answer.push("O");
				} else {
					answer.push("X");
				}
			} else {
				if(x - y === z) {
					answer.push("O");
				} else {
					answer.push("X");
				}
			}
		})

    return answer;
}

solution(["3 - 4 = -3", "5 + 6 = 11"]) // ["X", "O"]
solution(["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"]) // ["O", "O", "X", "O"]
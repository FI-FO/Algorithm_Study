function solution(num, total) {
    var answer = [];
		var start = (total / num) - ((num - 1) / 2);

		for(var i = 0; i < num; i++) {
			answer[i] = start;
			start++;
		}

    return answer;
}

solution(3, 12) // [3, 4, 5]
solution(5, 15) // [1, 2, 3, 4, 5]
solution(4, 14) // [2, 3, 4, 5]
solution(5, 5) // [-1, 0, 1, 2, 3]
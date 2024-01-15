function solution(a, b, flag) {
    var answer = 0;
		
		if(flag) {
			answer = a + b;
		} else {
			answer = a - b;
		}

    return answer;
}

solution(-4, 7, true); // 3
solution(-4, 7, false); // -11
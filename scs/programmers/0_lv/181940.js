function solution(my_string, k) {
    var answer = '';
		let i = k;
		
		while(i > 0) {
			answer += my_string;
			i--;
		}

    return answer;
}

solution('string', 3); // stringstringstring
solution('love', 10); // lovelovelovelovelovelovelovelovelovelove
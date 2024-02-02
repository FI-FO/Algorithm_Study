function solution(n) {
    let answer = -1;
		let i = 1;
		while(i <= n / i) {
			if(i * i === n) {
				answer = (i + 1) ** 2;
			}
			i++
		}

    return answer;
}

solution(121) // 144
solution(3) // -1
function solution(s) {
	var answer = 200002
	var max
	if(s % 2 === 0) max = s / 2
	else if(s === 1) max = 1
	else max = (s - 1) / 2

	for(var i = 1; i <= max; i++) {
		if(s % i === 0) {
			var temp = ((s / i) * 2) + (i * 2)
			if(answer > temp) answer = temp
		}
	}
	
	return answer
}


console.log(solution(6))
console.log(solution(9))
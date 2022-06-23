function solution(waiting) {
	var answer = []
	answer = new Set(waiting)
	answer = [...answer]
	return answer
}

var waiting1 = [1, 5, 8, 2, 10, 5, 5, 6, 4, 8]
var waiting2 = [5, 4, 4, 3, 5]

console.log(solution(waiting1))
console.log(solution(waiting2))
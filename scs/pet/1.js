function same(i, a, b) {
	while(i > 0) {
		if(JSON.stringify(a) !== JSON.stringify(b)) {
			var last = a.pop()
			a.unshift(last)
			i--
			same(i, a, b)
			if(i < 1) return false
		} else {
			return true
		}
	}
	
}

function solution(one, two) {
	var answer = true
	var leng = one.length
	answer = same(leng, one, two)
	return answer
}

var arrA = [7, 8, 10]
var arrB = [10, 7 ,8]
var arrC = [4, 3, 2, 1]
var arrD = [5, 4, 1, 2]

console.log(solution(arrA, arrB))
console.log(solution(arrC, arrD))
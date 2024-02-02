function solution(seoul) {
		const findIndex = seoul.indexOf("Kim");
    return `김서방은 ${findIndex}에 있다`
}

console.log(solution(["Jane", "Kim"])) // "김서방은 1에 있다"
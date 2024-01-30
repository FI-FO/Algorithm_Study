function solution(progresses, speeds) {
		const answers = [0];
		const days = progresses.map((progress, index) => {
			return Math.ceil((100 - progress) / speeds[index]);
		});
		let maxDay = days[0];

		for(let i = 0, j = 0; i < days.length; i++) {
			if(days[i] <= maxDay) {
				answers[j] += 1;
			} else {
				maxDay = days[i];
				answers[++j] = 1;
			}
		}

    return answers;
}

const case1 = solution([93, 30, 55], [1, 30, 5]); // [2, 1]
const case2 = solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]); // [1, 3, 2]

function solution(lines) {
		var arr = new Array(200).fill(0);

		lines.forEach(([start, end]) => {
			for(let i = start; i < end; i++) {
				arr[i + 100] += 1;
			}
		});

		return arr.filter((val) => val > 1).length;
}

solution([[0, 1], [2, 5], [3, 9]]); // 2
solution([[-1, 1], [1, 3], [3, 9]]); // 0
solution([[0, 5], [3, 9], [1, 10]]); // 8
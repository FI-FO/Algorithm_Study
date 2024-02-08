function solution(n, arr1, arr2) {
	let answer = [];
	const bin1 = arr1.map((dec) => {
		return dec.toString(2).padStart(n, '0').split("");
	});
	const bin2 = arr2.map((dec) => {
		return dec.toString(2).padStart(n, '0').split("");
	});
	
	for(let i = 0; i < n; i++) {
		let line = "";
		for(let j = 0; j < n; j++) {
			if(Number(bin1[i][j]) +  Number(bin2[i][j]) === 0) {
				line += " ";
			} else {
				line += "#";
			}
		}
		
		answer.push(line);
	}

	return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]))
//	["#####","# # #", "### #", "# ##", "#####"]
console.log(solution(6, [46, 33, 33 ,22, 31, 50], [27 ,56, 19, 14, 14, 10]))
// ["######", "### #", "## ##", " #### ", " #####", "### # "]

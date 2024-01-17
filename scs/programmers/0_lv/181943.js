function solution(my_string, overwrite_string, s) {
    var answer = '';
		var arr = my_string.split("");

		for(let i = 0; i < overwrite_string.length; i++) {
			arr[i + s] = overwrite_string[i];
		}

		answer = arr.join('').replaceAll(',', '');
    return answer;
}

solution("He11oWor1d", "lloWorl", 2); // HelloWorld
solution("Program29b8UYP", "merS123", 7); // ProgrammerS123
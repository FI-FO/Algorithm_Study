function solution(babbling) {
    var answer = 0;
		var words = ["aya", "ye", "woo", "ma"];
		var target = ""

		babbling.forEach((babble) => {
			target = babble;
			words.forEach((word) => {
				target = target.replace(word, "1");
			});
			target = target.replaceAll("1", "");
			
			if(!target) {
				answer++;
			}
		});

    return answer;
}

solution(["aya", "yee", "u", "maa", "wyeoo"]) // 1
solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]) // 3
function solution(msg) {
	let answer = [];
	
	const dictionary = {};
	let wordIdx = 1;
	for(let i = 65; i < 65 + 26; i++) {
		dictionary[String.fromCharCode(i)] = wordIdx++;
	}

	const msgs = msg.split('');
	let msgsIdx = 0;
	let msgString = '';

	while(msg.length !== msgsIdx) {
		msgString = msgString.concat(msgs[msgsIdx]);

		if(dictionary[msgString]) {
			msgsIdx++;
		} else {
			answer.push(dictionary[msgString.slice(0, msgString.length - 1)]);
			dictionary[msgString] = wordIdx++;
			msgString = '';
		}

		if(msgs.length === msgsIdx) {
			answer.push(dictionary[msgString])
		}
	}

	return answer;
}

const sol1 = solution('KAKAO'); // [11, 1, 27, 15]
console.log(sol1);
const sol2 = solution('TOBEORNOTTOBEORTOBEORNOT'); //	[20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34]
console.log(sol2);
const sol3 = solution('ABABABABABABABAB'); // [1, 2, 27, 29, 28, 31, 30]
console.log(sol3);
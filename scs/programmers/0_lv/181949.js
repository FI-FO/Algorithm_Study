const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = '';

rl.on('line', function (line) {
    input = line;
}).on('close',function(){
		const stringArray = [];
		
    for(let i = 0; i < input.length; i++) {
			if(input[i] === input[i].toLowerCase()) {
				stringArray.push(input[i].toUpperCase());
			} else {
				stringArray.push(input[i].toLowerCase());
			}
		}

		console.log(stringArray.join().replaceAll(',', ''));
});
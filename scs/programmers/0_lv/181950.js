const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
		const [str, n] = input;
		const stringArray = [];
    
		for(let i = 0; i < n; i++) {
			stringArray.push(str);
		}

		console.log(stringArray.join().replaceAll(',', ''));
});

function solution(target, typed) {
	target = target.toLowerCase();
	typed = typed.toLowerCase();
	let typedArr = typed.split("");

	for(let i = 0; i < target.length; i++) {
		typedArr = typedArr.filter((str) => str !== target[i]);
	}

	return typedArr.length === 0 ? true : false;
}

console.log(solution("ohouse", "oohoussse")); // true
console.log(solution("bucketplace", "buckeetpladce")); // false
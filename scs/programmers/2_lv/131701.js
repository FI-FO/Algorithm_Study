function solution(elements) {
	const set = new Set();

	for(let i = 1; i <= elements.length; i++) {
		const slice = elements.slice(0, i);
		const els = elements.concat(slice);
    // set 갱신
    for (let j = 0; j < elements.length; j++) {
      set.add(els.slice(j, j + i).reduce((a, c) => a + c, 0));
    }
	}
	
	return set.size;
}

console.log(solution([7, 9, 1, 1, 4])); // 18
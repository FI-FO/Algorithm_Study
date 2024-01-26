function solution(clothes) {
    let answer = 1;
		let clothesMap = new Map();

		clothes.forEach((cloth) => {
			clothesMap.set(cloth[1], (clothesMap.get(cloth[1]) || 0) + 1);
		});
		
		for(let [k, v] of clothesMap) {
			answer *= v + 1;
		}

    return answer - 1;
}

console.log(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]])) // 5;
console.log(solution([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]])) // 3;
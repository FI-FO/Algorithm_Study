function solution(cacheSize, cities) {
	let answer = 0;
	cities = cities.map((city) => city.toLowerCase());
	let cache = [];

	cities.forEach((city) => {
		const hasCache = cache.includes(city);

		if(!hasCache) {
			// miss
			cache.push(city);
			if(cache.length > cacheSize) {
				cache.shift();
			}
			answer += 5
		} else {
			// hit
			cache = cache.filter((ele) => ele !== city);
			cache.push(city);
			answer += 1;
		}
	})

	return answer;
}

// const sol1 = solution(3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]) // 50
const sol2 = solution(3, ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"]) // 21
// const sol3 = solution(2, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]) // 60
// const sol4 = solution(5, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]) // 52
// const sol5 = solution(2, ["Jeju", "Pangyo", "NewYork", "newyork"]) // 16
// const sol6 = solution(0 , ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"]) // 25
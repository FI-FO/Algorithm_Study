function solution(a, b, c, d) {
    var answer = 0;
		var arr = [a, b, c, d];
		var setter = new Set(arr);

		if(setter.size === 1) {
			answer = a * 1111;
		} else if(setter.size === 4) {
			answer = Math.min(...arr);
		} else if(setter.size === 3) {
			var [p, q, r] = [...setter];
			var pCount = 0;
			var qCount = 0;
			
			arr.forEach((num) => {
				if(num === p) pCount++;
				if(num === q) qCount++;
			});

			if(pCount === 2) {
				answer = q * r;
			} else if(qCount === 2) {
				answer = p * r;
			} else {
				answer = p * q;
			}
		} else {
			var [p, q] = [...setter];
			var count = 0;
			for(var i = 0; i < arr.length; i++) {
				for(var j = i + 1; j < arr.length; j++) {
					if(arr[i] === arr[j]) {
						count++;
					}
				}
			}

			if(count === 2) {
				answer = (p + q) * (Math.abs(p - q));
				
			} else if(count === 3) {
				var pCount = 0;
				var qCount = 0;

				arr.forEach((num) => {
					if(num === p) pCount++;
					if(num === q) qCount++;
				});

				if(pCount > qCount) {
					answer = (10 * p + q) ** 2;
				} else {
					answer = (10 * q + p) ** 2;
				}
			}
		}

    return answer;
}

solution(2, 2, 2, 2); // 2222
solution(4, 1, 4, 4); // 1681
solution(6, 3, 3, 6); // 27
solution(2, 5, 2, 6); // 30
solution(6, 4, 2, 5); // 2
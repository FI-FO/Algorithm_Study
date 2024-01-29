function solution(sizes) {
    let width = 0;
		let height = 0;
		
		for(let i = 0; i < sizes.length; i++){
        if(sizes[i][0] < sizes[i][1]){
            sizes[i].reverse();
        }

        if(sizes[i][0] > width){
            width = sizes[i][0];
        }
        if(sizes[i][1] > height){
            height = sizes[i][1];
        }
    }
		
    return width * height;
}

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]])) // 4000
console.log(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]])) // 120
console.log(solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]])) // 133
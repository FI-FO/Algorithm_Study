// function solution(participant, completion) {
//   let myMap = new Map();
//   for (let x of participant) {
//     myMap.set(x, (myMap.get(x) || 0) + 1);
//   }
//   for (let x of completion) {
//     myMap.set(x, (myMap.get(x) || 0) - 1);
//   }

//   for (let [k, v] of myMap) {
//     if (v === 1) {
//       return k;
//     }
//   }
// }

function solution(participant, completion) {
		participant.sort();
    completion.sort();
    for(var i=0;i<participant.length;i++) {
        if(participant[i] !== completion[i]){
            return participant[i];
        }
    }
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])); // "leo"
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"])); // "vinko"
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])); // "mislav"
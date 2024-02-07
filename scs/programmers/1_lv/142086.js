function solution(s) {
  const frontCheck = {};

  return s.split('').map((str,idx) => {
    if (frontCheck[str] !== undefined) {
      // 이미 존재하면 차이를 리턴하고 해당 idx로 갱신 
      const frontDistance = idx - frontCheck[str];
      frontCheck[str] = idx;
      return frontDistance;
    } else {
      // 없을 경우 해당 idx로 처음 갱신
      frontCheck[str] = idx;
      return -1;
    }
  });
}


console.log(solution("banana")) // [-1, -1, -1, 2, 2, 2]
console.log(solution("foobar")) // [-1, -1, 1, -1, -1, -1]
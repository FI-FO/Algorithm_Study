function solution(s,t)
{
    let answer = 0;

    while(s.includes(t)) {
        answer += 1;
        let idx = s.indexOf(t);
        s = s.slice(0, idx) + s.slice(idx + t.length);
    }

    return answer
}

console.log(solution('aabcbcd', 'abc')); // 2
function solution(s)
{
    let str = s
    let replaceStr = ""
    for(let i = 0; i < s.length - 1; i++) {
        for(let j = i + 1; j < s.length - 1; j++) {
            if(s[i] === s[j]) {
                replaceStr = replaceStr + `${s[i]}${s[j]}`
                str = str.replace(s[i], "")
                str = str.replace(s[j], "")
            }
        }
    }
    
    let answer = str !== "" ? 0 : 1
    return answer;
}
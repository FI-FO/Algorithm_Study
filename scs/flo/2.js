function solution(p,n)
{
    let [half, time] = p.split(" ")
    let [h, m, s] = time.split(":").map(each => parseInt(each))
    s = s + n
    if(half === "PM") h += 12
    if(s === 60) {
        s = 0
        m++
    }
    if(m === 60) {
        m = 0
        h++
    }
    if(h === 24) {
        h = 0
    }

    let answer = `${isTenOver(h)}:${isTenOver(m)}:${isTenOver(s)}`;
    return answer;
}

function isTenOver(num) {
    return num < 10 ? "0" + num : num
}
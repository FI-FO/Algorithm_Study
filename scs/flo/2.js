// 틀림

function solution(p,n)
{
    let [half, time] = p.split(" ")
    let [h, m, s] = time.split(":").map(each => parseInt(each))
		let mm = n >= 60 ? parseInt(n / 60) : 0
		let ss = n >= 60 ? n % 60 : n
		m += mm
    s += ss
    if(half === "PM") h += 12
    if(s >= 60) {
        s -= 60
        m++
    }
    if(m >= 60) {
        m -= 60
        h++
    }
    if(h >= 24) {
        h -= 24
    }

    let answer = `${isTenOver(h)}:${isTenOver(m)}:${isTenOver(s)}`;
    return answer;
}

function isTenOver(num) {
    return num < 10 ? "0" + num : num
}

console.log(solution("PM 01:00:00", 10))
console.log(solution("PM 01:00:00", 125))
console.log(solution("PM 01:00:00", 3847))
console.log(solution("AM 01:00:00", 3847))
console.log("----------------------------------")
console.log(solution("PM 11:59:59", 1))
console.log(solution("PM 11:59:59", 287))
console.log(solution("PM 11:59:59", 1392))
console.log(solution("AM 11:59:59", 1))
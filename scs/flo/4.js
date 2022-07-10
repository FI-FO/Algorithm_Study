const numberString = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
}

function solution(numbers) {
    let numStrArr = numbers.map(num => {
        let eachStr = ""
        String(num).split("").forEach(each => {
            eachStr = eachStr + numberString[each]
        })
        return eachStr
    }).sort()
    
    let strNumArr = numStrArr.map(str => {
        let eachStrArr = []
        Object.keys(numberString).find(ele => {
            if(str.lastIndexOf(numberString[ele]) > -1) {
                let joinString = [str.slice(0, str.lastIndexOf(numberString[ele])), ",", str.slice(str.lastIndexOf(numberString[ele]))].join("")
                eachStrArr = joinString.split(",")
            }
        })
        let eachStr = ""
        eachStrArr.forEach(eachString => {
            Object.keys(numberString).find(ele => {
                if(eachString === numberString[ele]) {
                    eachStr += ele
                }
            })
        })
        return Number(eachStr)
    })
    
    let answer = strNumArr;
    return answer;
}
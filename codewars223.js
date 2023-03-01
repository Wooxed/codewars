function alexMistakes(numberOfKata, timeLimit) {
    let result = 0
    timeLeft = timeLimit - numberOfKata * 6
    pushupsTime = 5
    while (timeLeft >= pushupsTime) {
        timeLeft -= pushupsTime
        pushupsTime *= 2
        result++
    }
    return result
}

const alexMistakes2 = (numberOfKata, timeLimit) => Math.log2((timeLimit - numberOfKata * 6) / 5 + 1) | 0
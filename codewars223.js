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
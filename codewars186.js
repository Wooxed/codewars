function scrabbleScore(str) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        result += $dict[str[i].toUpperCase()] || 0
    }
    return result
}
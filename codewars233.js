function arithmeticSequenceElements(a, d, n) {
    let result = [a]
    while (--n) {
        result.push(a += d)
    }
    return result.join(', ')
}
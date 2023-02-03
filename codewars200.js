function solution(n, b) {
    let result = []
    for (let i = 1; i < 2 ** n; i++) {
        if (i && b) {
            result.push(i)
        }
    }
    return result
}

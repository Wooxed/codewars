function isFunction(pairs) {
    for (let i = 0; i < pairs.length - 1; i++) {
        for (let j = 1; j < pairs.length; j++) {
            if (pairs[i][0] === pairs[j][0] && pairs[i][1] !== pairs[j][1]) {
                return false
            }
        }
    }
    return true
}
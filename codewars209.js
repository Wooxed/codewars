var isSquare = function (n) {
    if (n < 0) {
        return false
    }
    for (let i = 0; i <= n; i++) {
        if (i ** 2 === n) {
            return true
        } else {
            continue
        }
    }
    return false
}

var isSquare2 = n => Math.sqrt(n) % 1 === 0
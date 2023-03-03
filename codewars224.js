function factorial(n) {
    if (n === 0) {
        return 1
    }
    return n * factorial(n - 1)
}

const factorial2 = n => n ? n * factorial(n - 1) : 1
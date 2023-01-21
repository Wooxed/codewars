function fusc(n) {
    if (n < 2) {
        return n
    }
    if (n % 2) {
        return fusc((n - 1) / 2) + fusc((n - 1) / 2 + 1)
    }
    return fusc(n / 2)
}
function game(n, m) {
    return m === 2 ? 'second' : n % 2 ? 'first' : 'second'
}
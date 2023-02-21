function numberOfRectangles(m, n) {
    let result = 0
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            result += i * j
        }
    }
    return result
}


const numberOfRectangles2 = (m, n) => m * n * ++m * ++n / 4
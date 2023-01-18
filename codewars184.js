function dotCalculator(equation) {
    let [first, operator, last] = equation.split(' '),
        object = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            '*': (a, b) => a * b,
            '//': (a, b) => a / b,
        }
    return '.'.repeat(object[operator](first.length, last.length))
}
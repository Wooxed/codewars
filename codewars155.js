function sumOfN(n) {
    let result = [0];
    for (let i = 1; i <= Math.abs(n); i++) {
        result.push(result[i - 1] + i * Math.sign(n))
    }
    return result;
}
const divisions = (n, divisor, result = 0) => {
    if (n < divisor) {
        return result
    }
    return divisions(n / divisor, divisor, result + 1)

};

const divisions2 = (n, divisor) => Math.floor(Mat.log(n) / Math.log(divisor))
const closestMultiple10 = num => {
    let result = num % 10
    if (result < 5) {
        num -= result
    } else {
        num += 10 - result
    }
    return num;
};
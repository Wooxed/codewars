const printerError = s => {
    result = 0;
    for (let i in s) {
        if (s[i] > 'm') {
            result++;
        }
    }
    return result + '/' + s.length
}

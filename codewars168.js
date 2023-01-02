function consecutive(arr, a, b) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === a) {
            return arr[i + 1] === b
        }
        if (arr[i] === b) {
            return arr[i + 1] === a
        }
    }
    return false
}
function isNice(arr) {
    let result = 0,
        letngth = arr.length
    if (arr[0] !== undefined) {
        for (let index = 0; index < letngth; index++) {
            for (let index2 = 0; index2 < letngth; index2++) {
                if (arr[index] === arr[index2] + 1 || arr[index] === arr[index2] - 1) {
                    result++
                    break
                }
            }
        }
        return result === letngth
    } else {
        return false
    }
}
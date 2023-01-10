function maxRot(n) {
    let array = String(n).split(''),
        result = n
    for (let i = 0; i < array.length - 1; i++) {
        array.push(array.splice(i, 1))
        let num = Number(array.join(''))
        if (num > result) {
            result = num
        }
    }
    return result
}
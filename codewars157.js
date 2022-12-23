function countLanguages(list) {
    let result = {}
    for (let object in list) {
        let key = list[object].language
        if (!result[key]) {
            result[key] = 1
        } else {
            result[key]++
        }
    }
    return result
}
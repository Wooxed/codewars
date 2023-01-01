const rotateMatrix = arr => {
    let result = [],
        innerArray = arr[0]
    for (let i = innerArray.length - 1; i >= 0; i--) {
        let newInnerArray = []
        for (let j = 0; j < arr.length; j++) {
            newInnerArray.push(arr[j][i])
        }
        result.push(newInnerArray)
    }
    return result
}
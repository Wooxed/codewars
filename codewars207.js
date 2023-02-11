function mxdiflg(a1, a2) {
    let result = 0,
    lengthA = a1.length,
    lengthB = a2.length
    if (lengthA === 0 || lengthB === 0) {
        return -1
    }
    for (let i = 0; i < lengthA; i++) {
        for (let j = 0; j < lengthB; j++) {
            let length1 = a1[i].length,
                length2 = a2[j].length
            if (result < length1 - length2) {
                result = length1 - length2
            } else if (result < length2 - length1) {
                result = length2 - length1
            }
        }
    }
    return result
}
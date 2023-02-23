function smallEnough(a, limit) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] > limit) {
            return false
        }
    }
    return true
}

const smallEnough2 = (a, limit) => a.every(el => el <= limit)
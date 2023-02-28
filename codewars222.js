function removeRotten(bagOfFruits) {
    let result = []
    if (bagOfFruits) {
        for (let i = 0; i < bagOfFruits.length; i++) {
            let fruit = bagOfFruits[i]
            if (fruit.slice(0, 6) === 'rotten') {
                result.push(fruit.slice(6).toLowerCase())
            } else {
                result.push(fruit)
            }
        }
    }
    return result
}


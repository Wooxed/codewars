function colourAssociation(array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        result[i] = {[array[i][0]]: array[i][1]}
    }
    return result
}

const colourAssociation2 = array =>  array.map(([color, meaning]) => ({[color]: meaning}))
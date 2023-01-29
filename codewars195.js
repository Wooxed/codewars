function rakeGarden(garden) {
    let raked = garden.split(' ')
    for (let i = 0; i < raked.length; i++) {
        if (raked[i] !== 'rock') {
            raked[i] = 'gravel'
        }
    }
    return raked.join(' ')
}
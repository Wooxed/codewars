function rakeGarden(garden) {
    let raked = garden.split(' ')
    for (let i = 0; i < raked.length; i++) {
        if (raked[i] !== 'rock') {
            raked[i] = 'gravel'
        }
    }
    return raked.join(' ')
}

const rakeGarden2 = garden => garden.split(' ')
    .map(el => el !== 'rock' ? 'gravel' : el)
    .join(' ')

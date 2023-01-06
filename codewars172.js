function ghostBusters(building) {
let result = '';
    for (let i = 0; i < building.length; i++) {
        if(building[i] !== ' ') {
            result += building[i]
        }
    }
    if (building === result) {
        return "You just wanted my autograph didn't you?";
    }
    return result
}


const ghostBusters2 = building => /\s/.test(building) ? building.split(' ').join('') : "You just wanted my autograph didn't you?";
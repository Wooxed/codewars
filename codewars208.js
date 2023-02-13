function friend(friends) {
    let result = []
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length === 4) {
            result.push(friends[i])
        }
    }
    return result
}

const friend2 = (friends) => friends.filter(el => el.length === 4)
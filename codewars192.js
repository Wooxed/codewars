const choreAssignment = (chores, length = chores.length) =>
    chores.sort((a, b) => a - b)
        .map((el, i) => el + chores[length - 1 - i])
        .slice(length / 2)
        .sort((a, b) => a - b)

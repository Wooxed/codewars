const makeValley = arr =>
    [...arr.sort((a, b) => b - a).filter((_, index) => !(index % 2)), ...arr.sort((a, b) => b - a).filter((_, index) => index % 2).reverse()]
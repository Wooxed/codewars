function solution(arr, options) {
    let result = []
    for (let i = 0; i < arr.length; ++i) {
        result[i] = arr[i] + 2 * options.modifier;
    }
    return result;
}

const solution2 = (arr, options) => arr.map(el => el + 2 * options.modifier)
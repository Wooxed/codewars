function sumOfDifferences(arr) {
  return arr
    .sort((a, b) => b - a)
    .reduce((acc, curr, index, array) => {
      const next = array[index + 1];
      if (!isNaN(curr - next)) {
        acc += curr - next;
      }
      return acc;
    }, 0);
}

console.log(sumOfDifferences([]));
console.log(sumOfDifferences([10]));
console.log(sumOfDifferences([10, 1, 2]));

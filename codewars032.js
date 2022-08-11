function countPositivesSumNegatives(input) {
  if (input == null || input.length == 0) return [];
  let p = 0,
    n = 0;
  input.forEach((x) => (x > 0 ? p++ : (n += x)));
  return [p, n];
}

function multiTable(n) {
  let res = "";
  for (let i = 1; i <= 10; i++) {
    res += `${i} * ${n} = ${i * n}${i < 10 ? "\n" : ""}`;
  }
  return res;
}

function numberOfPairs(gloves) {
  const h = {};

  for (let i = 0; i < gloves.length; i++) {
    if (!h[gloves[i]]) h[gloves[i]] = 1;
    else h[gloves[i]]++;
  }
  let res = 0;

  Object.keys(h).forEach((el) => (res += Math.floor(h[el] / 2)));

  return res;
}

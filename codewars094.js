function vowelIndices(word) {
  const vowels = "aeiouyAEIOUY";
  const res = [];

  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) res.push(i + 1);
  }
  return res;
}

const reverseSeq = (n) => {
  return Array(n)
    .fill(null)
    .map(() => n--);
};

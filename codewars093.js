function isCoprime(x, y) {
  const min = Math.min(x, y);

  for (let i = 2; i <= min; i++) {
    if (!(x % i) && !(y % i)) return false;
  }
  return true;
}

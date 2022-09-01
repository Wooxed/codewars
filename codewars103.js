function index(array, n) {
  const el = array[n];
  if (!el) return -1;
  return el ** n;
}

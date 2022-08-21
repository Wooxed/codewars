function enough(cap, on, wait) {
  const p = on + wait - cap;
  return p < 0 ? 0 : p;
}

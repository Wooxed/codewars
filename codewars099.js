function racePodium(blocks) {
  if (blocks === 7) return [2, 4, 1];
  const s = Math.ceil(blocks / 3);
  const f = s + 1;
  const t = blocks - f - s;
  return [s, f, t];
}

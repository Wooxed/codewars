function rentalCarCost(d) {
  let total = 40 * d,
    discount = 0;
  if (d >= 7) {
    total -= 50;
  } else if (d >= 3) {
    total -= 20;
  }
  return total;
}

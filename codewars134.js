function numberToPower(number, power) {
  console.info(Math.log2(1024));
  result = 1;
  for (let i = 1; i <= power; i++) {
    result = result * number;
  }
  return result;
}

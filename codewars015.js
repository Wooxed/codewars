function countSheeps(arrayOfSheep) {
  let counter = 0;
  for (i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i]) counter += 1;
  }
  return counter;
}

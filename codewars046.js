function betterThanAverage(classPoints, yourPoints) {
  return (
    classPoints.reduce((acc, item) => acc + item, 0) / classPoints.length <
    yourPoints
  );
}

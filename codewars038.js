function getAverage(marks) {
  return Math.floor(marks.reduce((acc, cur) => acc + cur) / marks.length);
}


const getAverage2 = marks => {
  let acc = 0;
  marks.forEach(el => acc += el)
  return Math.floor(acc / marks.length)
}
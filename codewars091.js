function averageString(str) {
  const num = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  const word = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  };
  if (!str.length) return "n/a";
  let n = 0;
  const l = str.split(" ").length;
  const arr = str
    .split(" ")
    .map((v) => (num.hasOwnProperty(v) ? (v = num[v]) : (n = 1)))
    .reduce((a, b) => a + b, 0);
  return n === 0 ? word[Math.floor(arr / l)] : "n/a";
}

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

class SmallestIntegerFinder2 {
  findSmallestInt(args) {
    let currentMin = args[0];
    for (let i = 1; i < args.length; i++) {
      if (args[i] < currentMin) currentMin = args[i]
    }
    return currentMin
  }
}
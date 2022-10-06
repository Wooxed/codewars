function Dog(breed) {
  this.breed = breed;
}

let snoopy = new Dog("Beagle");

Dog.prototype.bark = function () {
  return "Woof";
};

let scoobydoo = new Dog("Great Dane");

class animal {
  name: string;
  species: string;
  sound: string;

  constructor(name: string, species: string, sound: string) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }
  makeSound() {
    console.log(`The ${this.name} says ${this.sound}`);
  }
}
const dog = new animal("German Shepard", "dog", "Ghew Ghew");
dog.makeSound();
console.log(dog);

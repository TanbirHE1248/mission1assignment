// keyof guard
type Alphanumeric = string | number;
function add(param1: Alphanumeric, param2: Alphanumeric): Alphanumeric {
  if (typeof param1 == "number" && param2 == "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}
add("1", "3");
add(1, 3);

// in guard
type NormalUserType = {
  name: string;
};
type AdminUserType = {
  name: string;
  role: "admin";
};
const normalUser: NormalUserType = { name: "Mr, Kallu" };
const adminUser: AdminUserType = { name: "Mr, Kallu", role: "admin" };

function getUser(user: NormalUserType | AdminUserType): string {
  if ("role" in user) {
    return `I am an admin and my role is ${user.role}`;
  } else {
    return `I am an normal user`;
  }
}
console.log(getUser(normalUser));
console.log(getUser(adminUser));

// instanceof guard
class Animal {
  name: string;
  species: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }
  makeSound() {
    console.log("I am making sound");
  }
}
class Dog extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeBark() {
    console.log("I am Barking");
  }
}
class Cat extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeMeaw() {
    console.log("I am Meawing");
  }
}

const animal1 = new Dog("German Bhai", "dog");
const animal2 = new Cat("Persian Bhai", "cat");

function getAnimal(animal: Animal) {
  if (animal instanceof Dog) {
    animal.makeBark();
  } else if (animal instanceof Cat) {
    animal.makeMeaw();
  } else {
    animal.makeSound();
  }
}
getAnimal(animal2);

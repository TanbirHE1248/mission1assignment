// // parent class
// class Person {
//   name: string;
//   age: number;
//   address: string;

//   constructor(name: string, age: number, address: string) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//   }
//   makeSleep(hours: number): string {
//     return `This ${this.name} will sleep for ${hours} hours`;
//   }
// }

// class Student extends Person {
//   //   name: string;
//   //   age: number;
//   //   address: string;

//   constructor(name: string, age: number, address: string) {
//     super(name, age, address);
//     // this.name = name;
//     // this.age = age;
//     // this.address = address;
//   }
//   //   makeSleep(hours: number): string {
//   //     return `This ${this.name} will sleep for ${hours} hours`;
//   //   }
// }
// const student1 = new Student("Tanbir", 23, "Mirsarai");
// console.log(student1.makeSleep(6));

// class Teacher extends Person {
//   //   name: string;
//   //   age: number;
//   //   address: string;
//   designation: string;

//   constructor(name: string, age: number, address: string, designation: string) {
//     super(name, age, address);
//     // this.name = name;
//     // this.age = age;
//     // this.address = address;
//     this.designation = designation;
//   }
//   //   makeSleep(hours: number): string {
//   //     return `This ${this.name} will sleep for ${hours} hours`;
//   //   }
//   takeClass(hours: number): string {
//     return `This ${this.name} will take class for ${hours} hours`;
//   }
// }
// const teacher1 = new Teacher("Abiha", 25, "Jhenaidah", "Assistant Teacher");
// teacher1.address;

// /*

// */

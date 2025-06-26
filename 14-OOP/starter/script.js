// // 'use strict';
// // OOP

// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Never do this
//   // this.calcAge = function () {
//   //   console.log(2037, this.birthYear);
//   // };
// };

// const luka = new Person('luka', 203);
// // console.log(luka);

// /*

//   1. new {} is created
//   2. function is called, this = {}
//   3. {} linked to prototype
//   4. function automatically return {}

// */

// const matilda = new Person('matilda', 2034);
// // console.log(matilda);

// // console.log(luka instanceof Person);

// // Prototypes
// Person.prototype.calcAge = function () {
//   console.log(2045 - this.birthYear);
// };

// // luka.calcAge();

// // console.log(luka.__proto__);
// // console.log(luka.__proto__ === Person.prototype);

// // console.log(Person.prototype.isPrototypeOf(luka));
// // console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.species = 'Homo Sapiens';
// // console.log(luka.species, matilda);

// // console.log('////');
// // console.log(luka.hasOwnProperty('firstName'));
// // console.log(luka.hasOwnProperty('species'));

// ////////////////////
// //Object.prototype (top of prototype chain)
// console.log(luka.__proto__.__proto__);

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed}`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed}`);
// };

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);

// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// bmw.accelerate();

/*
class expression
const PersonCl = class{}
*/

// class declaration
// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   // Methods will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }
// }

// const jessica = new PersonCl('Jessica', 1996);
// console.log(jessica);
// // PersonCl.prototype.greet = function () {
// //    console.log(`Hey ${this.firstName}`)
// // };
// jessica.greet();

// // 1. Classes are NOT hoisted
// // 2. Class are first-class citizes
// // 3. Classes are executed in strict mode

///////////////////////////// getters and setters
// const account = {
//   owner: 'luka',
//   movements: [123, 213, 4324],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);
// account.latest = 50;

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // Set a property that already exists
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) {
//       this._fullName = name;
//     } else {
//       alert(`${name} is not a full name!`);
//     }
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static method
//   static hey() {
//     console.log('hey');
//   }
// }

// const jessica = new PersonCl('Jessica', 1996);
// // console.log(jessica);
// // jessica.greet();
// console.log(jessica.age);

const PersonProto = {
  calcAge() {
    console.log(2047 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2003;
steven.calcAge();

console.log(steven.__proto__);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 2304);
sarah.calcAge();

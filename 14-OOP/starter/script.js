// 'use strict';
// OOP

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  // this.calcAge = function () {
  //   console.log(2037, this.birthYear);
  // };
};

const luka = new Person('luka', 203);
// console.log(luka);

/* 

  1. new {} is created
  2. function is called, this = {}
  3. {} linked to prototype
  4. function automatically return {}

*/

const matilda = new Person('matilda', 2034);
// console.log(matilda);

// console.log(luka instanceof Person);

// Prototypes
Person.prototype.calcAge = function () {
  console.log(2045 - this.birthYear);
};

// luka.calcAge();

// console.log(luka.__proto__);
// console.log(luka.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(luka));
// console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
// console.log(luka.species, matilda);

// console.log('////');
// console.log(luka.hasOwnProperty('firstName'));
// console.log(luka.hasOwnProperty('species'));

////////////////////
//Object.prototype (top of prototype chain)
console.log(luka.__proto__.__proto__);

const arr = [1, 2, 3, 4, 5];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

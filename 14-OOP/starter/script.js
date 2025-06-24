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
console.log(luka);

/* 

  1. new {} is created
  2. function is called, this = {}
  3. {} linked to prototype
  4. function automatically return {}

*/

const matilda = new Person('matilda', 2034);
console.log(matilda);

console.log(jonas instanceof Person);

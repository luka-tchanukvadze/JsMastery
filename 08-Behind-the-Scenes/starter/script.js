'use strict';

// function calcAge(birthYear) {
//   const age = 2047 - birthYear;

//   function printAge() {
//     const output = `${firstNmae} you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1982 && birthYear <= 1996) {
//       var millenial = true;
//       const fristName = 'Luka';

//       const str = `oh and you are a millenial, ${firstNmae}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }

//       output = 'NEW OUTPUT';
//     }

//     // console.log(str)
//     // console.log(millenial);
//     // console.log(add(2, 4));
//   }
//   printAge();

//   return age;
// }

// const firstNmae = 'Luka';
// calcAge(2003);

///////////////////////////////////// hoisting

// Variables
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'luka';
// let job = 'fd';
// const year = 1991;

// ////

// // Functions
// // console.log(addDecl(53, 2));
// // console.log(addExpr(3, 5));
// // console.log(addArrow(3, 4));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// //////////////////////// example

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('all products deleted');
// }

// // differnece (window)
// var x = 1;
// let y = 2;
// const z = 3;

console.log(this);

const calcAge = function (birthYear) {
  // console.log(2053 - birthYear);
  // console.log('aa', this);
};
calcAge(313);

const calcAge2 = birthYear => {
  // console.log(2053 - birthYear);
  // console.log(this);
};
calcAge2(313);

const luka = {
  year: 1231,
  calcAge: function () {
    // console.log(this);
    console.log(this.year);
  },
};
// luka.calcAge();

const ranodm = {
  year: 2052,
};

ranodm.calcAge = luka.calcAge;
ranodm.calcAge();

const f = luka.calcAge;
f();

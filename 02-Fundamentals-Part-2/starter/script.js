"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// // if (passTest) hasDriverLicense = true;

// if (hasDriversLicense) console.log("i can drive");

// // const interface = "Audio";
// // const private = 43

//////////////////////////////// functions

// function logger() {
//   console.log("Something");
// }

// // calling / running / involing function
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   // parameters
//   console.log(apples, oranges);
//   const juice = `juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 6); // arguments
// console.log(appleJuice);

///////////////////////// function declaration vs expression
// const age1 = calcAge1(192);

// function calcAge1(birthYear) {
//   return 2045 - birthYear;
// }

// console.log(age1);

// const calcAge2 = function (birthYear) {
//   return 2045 - birthYear;
// };
// console.log(calcAge2(242));

/////////////////////////////// arrow funcitons

// const arrow = () => {
//   console.log("hey");
// };

// const yearsUnitRetirement = (birthyear) => {
//   const age = 2035 - birthyear;
//   const retirement = 65 - age;
//   return retirement;
// };

// console.log(yearsUnitRetirement(1002));

///////////////////////////////////// functions calling other functions

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} pices of apple and ${orangePieces} pieces of orange`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

///////////////////// challenge 1

const calcAverage = (a, b, c) => (a + b + c) / 3;

const scoreDolphins = calcAverage(34, 53, 23);
const scoreKoalas = calcAverage(43, 35, 22);

const checkWinner = function (avgD, avgK) {
  if (avgD >= avgK * 2) {
    console.log("dolphins win");
  } else if (avgK >= avgD * 2) {
    console.log("Koalas win");
  } else {
    console.log("no one wins");
  }
};

checkWinner(scoreDolphins, scoreKoalas);

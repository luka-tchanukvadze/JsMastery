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

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pices of apple and ${orangePieces} pieces of orange`;
  return juice;
}

console.log(fruitProcessor(2, 3));

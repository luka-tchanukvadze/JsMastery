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

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// const scoreDolphins = calcAverage(34, 53, 23);
// const scoreKoalas = calcAverage(43, 35, 22);

// const checkWinner = function (avgD, avgK) {
//   if (avgD >= avgK * 2) {
//     console.log("dolphins win");
//   } else if (avgK >= avgD * 2) {
//     console.log("Koalas win");
//   } else {
//     console.log("no one wins");
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);

// const friends = ["luka", "chanu"];

// const years = new Array(1442, 231, 4235);

// // it's too basic, i will just watch it

// friends.push("tchanu");
// const newLength = friends.push("whaat");

// if (friends.includes("aa")) {
//   console.log("naah");
// }

//////////////////challenge 2

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [434, 432, 53];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(bills, tips);

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

/////////////////////////objects

// object literal
const chanu = {
  firstName: "Luka",
  lastane: "Chanu",
  age: "immortal",
};

console.log(chanu);
console.log(chanu.lastane);
console.log(chanu["lastane"]);

const nameKey = "Name";
console.log(chanu["first" + nameKey]);

const interesstedIn = prompt(
  "what do you want to know about me? choose between firstName, lastName, age"
);
console.log(chanu[interesstedIn]);

if (chanu[interesstedIn]) {
  console.log(chanu[interesstedIn]);
} else {
  console.log("wrong request");
}

chanu.location = "Georgia";
chanu["twitter"] = "N/A";
console.log(chanu);

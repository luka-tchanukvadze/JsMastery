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
// const chanu = {
//   firstName: "Luka",
//   lastane: "Chanu",
//   age: "immortal",
// };

// console.log(chanu);
// console.log(chanu.lastane);
// console.log(chanu["lastane"]);

// const nameKey = "Name";
// console.log(chanu["first" + nameKey]);

// const interesstedIn = prompt(
//   "what do you want to know about me? choose between firstName, lastName, age"
// );
// console.log(chanu[interesstedIn]);

// if (chanu[interesstedIn]) {
//   console.log(chanu[interesstedIn]);
// } else {
//   console.log("wrong request");
// }

// chanu.location = "Georgia";
// chanu["twitter"] = "N/A";
// console.log(chanu);

// const chanu = {
//   firstName: "Luka",
//   lastane: "Chanu",
//   birthYear: 2003,
//   age: "immortal",
//   friends: ["luka", "chanu"],
//   hasDriversLicense: true,

//   // calcAge: function (birthYear) {
//   //   return 2034 - birthYear;
//   // },

//   // calcAge: function () {
//   //   return 2034 - this.birthYear;
//   // },

//   calcAge: function () {
//     this.age = 2034 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is  a ${this.calcAge()} year old `;
//   },
// };

// // console.log(chanu["calcAge"](1882));
// // console.log(chanu["calcAge"]);

// console.log(chanu.age);
// console.log(chanu.age);
// console.log(chanu.age);

// console.log(chanu.getSummary());

// i am too buesy today so i will do somthing small

// const myList = [1, 2, 3, 4, 5];

// const myMap = myList.map((el) => console.log(`<h1>${el}</h1>`));

// // console.log(myMap);

// const myFilter = myList.filter((el) => el % 2 === 0);
// console.log(myFilter);

// const myReduce = myList.reduce(
//   (accumulator, currectValue) => accumulator + currectValue,
//   0
// );
// console.log(myReduce);

// const myForEach = myList.forEach((el) => console.log(`<h1>${el ** 5}</h1>`));

// challenge 3
/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
*/

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   },
// };

// mark.calcBMI();
// john.calcBMI();

// console.log(mark.bmi, john.bmi);

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`
//   );
// } else if (john.bmi > mark.bmi) {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`
//   );
// }

///////////////// iteration, for loop

// for (let rep = 1; rep < 10; rep++) {
//   console.log(`hey ${rep}`);
// }

// const myArray = ["chanu", 122, "luka", "star wars"];

// const types = [];

// for (let i = 0; i < myArray.length; i++) {
//   // console.log(`${myArray[i]}, ${typeof myArray[i]}`);

//   // types[i] = typeof myArray[i];
//   types.push(typeof myArray[i]);
// }
// // console.log(types);

// const years = [122, 324, 325, 523];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2045 - years[i]);
// }

// // console.log(ages);
// console.log("ONLY STRINGS");
// for (let i = 0; i < myArray.length; i++) {
//   // if (typeof myArray[i] !== "string") continue;
//   if (typeof myArray[i] !== "string") continue;
//   console.log(`${myArray[i]}, ${typeof myArray[i]}`);
// }

// console.log("BRAKE");
// for (let i = 0; i < myArray.length; i++) {
//   // if (typeof myArray[i] !== "string") continue;
//   if (typeof myArray[i] !== "number") break;
//   console.log(`${myArray[i]}, ${typeof myArray[i]}`);
// }

const chanu = ["chanu", "luka", 4324, "legend", ["fucking", "legend"]];

for (let i = chanu.length - 1; i >= 0; i--) {
  console.log(chanu[i]);
}

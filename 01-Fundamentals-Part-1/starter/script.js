/*

  1. Store Mark's and John's mass and height in variables
  2. Calculate both their BMIs usying the formula 
  3. Create a boolean variable 'markHigherBMI' containing information about whther Mark has higher BMI than John

*/

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMICalculator = (height, mass) => {
//   return mass / height ** 2;
// };

// const BMIMark = BMICalculator(heightMark, massMark);
// const BMIJohn = BMICalculator(heightJohn, massJohn);

// if (BMIMark > BMIJohn) {
//   console.log("marks bmi is higher than johns");
// } else {
//   console.log("john's is higher");
// }

///////////////////////////////////////////////
// type conversion

// const inputYear = "1991";
// console.log(Number(inputYear));

// console.log(Number(inputYear) + 18);

// console.log(Number("luka"));
// console.log(typeof NaN);

// // type coercion

// console.log("i am " + 21 + " years old");
// console.log("23" - "10" + 3);
// console.log("23" * "2");
// console.log("23" / "2");

// let n = "1" + 1;
// n = n - 1;

// console.log(2 + 3 - "4" + 4 - 2 + "4");
// console.log("23" - 3 + 4 - "4");

// // falsy values: 0, '', undefined, null, Nan

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("jonS"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 0;
// if (money) {
//   console.log("Don't spend it all");
// } else {
//   console.log("You should get a job");
// }

// let height;
// if (height) {
//   console.log("yay, it is defined");
// } else {
//   console.log("it is undefined");
// }

// equality operators

// const age = 18;
// if (age === 18) console.log("You just became an adult XD (strict)");

// if (age === 18) console.log("You just became an adult XD (loose)");

// const favourite = Number(prompt("what's your favourtie number"));
// // const favourite = prompt("what's your favourtie number")
// console.log(favourite);
// console.log(typeof favourite);

// // if(favourite == 23) {
// if (favourite === 23) {
//   console.log("Cool");
// } else if (favourite === 7) {
//   console.log("wow");
// } else {
//   console.log("lame, no number");
// }

// if (favourite !== 23) console.log("why not 23");

// Boolean Logic

// const hasDriverLicense = true;
// const hasGoodVision = true;

// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// // if (shouldDrive) {
// //   console.log("sara is able to drive");
// // } else {
// //   console.log("sara is able to drive");
// // }

// const isTired = true;
// console.log(hasDriverLicense || hasGoodVision || isTired);

// if (shouldDrive && hasGoodVision && !isTired) {
//   console.log("sara is able to drive");
// } else {
//   console.log("sara is able to drive");
// }

// Challenge 3

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the trophy");
// } else if (scoreKoalas > scoreDolphins) {
//   console.log("Koalas win the trophy");
// } else if (scoreDolphins === scoreKoalas) {
//   console.log("Both win the trophy");
// }

// Bonus 1

// const scoreDolphins = (96 + 112 + 100) / 3;
// const scoreKoalas = (88 + 120 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log("Dolphins win the trophy");
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//   console.log("Koalas win the trophy");
// } else if (
//   scoreDolphins === scoreKoalas &&
//   scoreKoalas >= 100 &&
//   scoreDolphins >= 100
// ) {
//   console.log("Both win the trophy");
// } else {
//   console.log("No one wins the trophy");
// }

// const day = "monday";

// switch (
//   day // day === monday
// ) {
//   case "monday":
//     console.log("plan course structure");
//     break;
//   case "tuesday":
//     console.log("prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursay":
//     console.log("write code example");
//     break;

//   default:
//     console.log("not a valid  day");
// }

// if (23 > 2) {
//   const aaa = "23 is bigger";
// }

// const age = 23;
// age >= 18
//   ? console.log("i like to dring beer")
//   : console.log("i like to dring water");

// console.log(
//   `I like o dring ${
//     age >= 18
//       ? console.log("i like to dring beer")
//       : console.log("i like to dring water")
//   }`
// );

// challenge 4

const bill = 250;

const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(
  `the bill was ${bill}, the tip was ${tip}, and the toatl valu ${bill + tip}`
);

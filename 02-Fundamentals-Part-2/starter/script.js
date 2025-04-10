"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// // if (passTest) hasDriverLicense = true;

// if (hasDriversLicense) console.log("i can drive");

// // const interface = "Audio";
// // const private = 43

//////////////////////////////// functions

function logger() {
  console.log("Something");
}

// calling / running / involing function
logger();
logger();

function fruitProcessor(apples, oranges) {
  // parameters
  console.log(apples, oranges);
  const juice = `juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 6); // arguments
console.log(appleJuice);

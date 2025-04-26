// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) understanding the problem
// - what is temp amplitude? answer: diffrenece between highest and lowest temp
// - how to compute max and min temeratures?
// - what's a sensor error? and what to do?

// 2) breaking up into sub-problems
// - how to ingore errors?
// - find max value in temp array
// - find min value in temp array
// - subtract min from max (amplitude) and return it

/*
const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== "number") continue;

    if (curTemp > max) {
      max = curTemp;
    } else if (curTemp < min) {
      min = curTemp;
    }
  }
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
*/

// PROBLEM 2:
// function should now receive 2 arrays of temps

// 1) understanding the problem
// - with 2 arrays, should we implement functionality twise? NO!, just merge two arrays

// 2) breaking up into sub-problems
// - mege 2 arrays

const calcTempAmplitude = function (temps1, temps2) {
  const temps = temps1.concat(temps2);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== "number") continue;

    if (curTemp > max) {
      max = curTemp;
    } else if (curTemp < min) {
      min = curTemp;
    }
  }
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures, [50, 3, 24]);
console.log(amplitude);

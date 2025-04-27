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

// const calcTempAmplitude = function (temps1, temps2) {
//   const temps = temps1.concat(temps2);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];

//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) {
//       max = curTemp;
//     } else if (curTemp < min) {
//       min = curTemp;
//     }
//   }
//   return max - min;
// };

// const amplitude = calcTempAmplitude(temperatures, [50, 3, 24]);
// console.log(amplitude);

// const measureKelvnin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",

//     // c) fix
//     // value: Number(prompt("Degrees celcius")),
//     value: 10,
//   };

//   // b) find
//   console.log(measurement);

//   console.log(measurement.value);

//   const kekvin = measurement.value + 243;
//   return kekvin;
// };

// // a) indentify
// console.log(measureKelvnin());

// ////////////////////////////////////////////

// const calcTempAmplitudeBug = function (temps1, temps2) {
//   const temps = temps1.concat(temps2);

//   let max = 0;
//   let min = 0;

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];

//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) {
//       max = curTemp;
//     } else if (curTemp < min) {
//       min = curTemp;
//     }
//   }
//   return max - min;
// };

// const amplitude = calcTempAmplitudeBug([1, 4, 5], [50, 3, 24]);
// console.log(amplitude);

// // a) identify

/////////////////////////////////challenge 1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// 1) understanding
// - transform array in sting
// numbers are index + 1

// 2) sub problems
// i can just loop on array and create strings

// const printForecast = (arr) => {
//   let str = "";

//   for (let i = 0; i < arr.length; i++) {
//     str += `... ${arr[i]}C in ${i + 1} days`;
//   }

//   console.log(str + " ...");
// };

// printForecast([33, 44, 22]);

/*
Let's say you're building a time tracking application for freelancers. At some point in building this app, you need a function that receives daily work hours for a certain week, and returns:
1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. Whether the week was full-time (worked 35 hours or more)

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/
function analyzeWorkWeek(dailyHours) {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  // Validate that the input array has exactly 7 elements
  if (!Array.isArray(dailyHours) || dailyHours.length !== 7) {
    throw new Error("Input must be an array of exactly 7 daily work hours.");
  }

  // Calculate total hours worked
  const totalHours = dailyHours.reduce((sum, hours) => sum + hours, 0);

  // Calculate average daily hours, rounded to one decimal place
  const averageHours = Math.round((totalHours / dailyHours.length) * 10) / 10;

  // Find the day with the most hours worked
  const maxHours = Math.max(...dailyHours);
  const maxDayIndex = dailyHours.indexOf(maxHours);
  const maxDay = daysOfWeek[maxDayIndex]; // Convert index to day name

  // Count the number of days worked
  const daysWorked = dailyHours.filter((hours) => hours > 0).length;

  // Check if the week was full-time (35 hours or more)
  const isFullTime = totalHours >= 35;

  // Return the result object
  return {
    totalHours,
    averageHours,
    maxDay, // The name of the day with the most hours
    daysWorked,
    isFullTime,
  };
}

const weeklyHours = [7.5, 8, 6.5, 0, 8.5, 5, 0];
const analysis = analyzeWorkWeek(weeklyHours);
console.log(analysis);

const weeklyHours2 = [7.5, 8, 6.5, 0, 8.5];
const analysis2 = analyzeWorkWeek(weeklyHours2);
console.log(analysis2);

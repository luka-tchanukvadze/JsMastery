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

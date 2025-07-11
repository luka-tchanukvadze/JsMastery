'use strict';

const { entries } = require('lodash');

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});
// when freezing we cann't add new things, but we can update
// spendingLimits.jay = 200;
// console.log(spendingLimits);

const getLimit = (limits, user) => limits?.[user] ?? 0;

const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  const cleanUser = user.toLowerCase();

  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;

  // budget.push({ value: -value, description, user: cleanUser });
};

const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
const newBudget2 = addExpense(newBudget1, spendingLimits, 10, 'Pizza 🍕');
const newBudget3 = addExpense(newBudget2, spendingLimits, 10000, 'Pizza 🍕');
// console.log(newBudget1);
// console.log(newBudget2);
// console.log(newBudget3);
// console.log(budget);

// we had inpure function before (array was manipulated by function)
// addExpense(budget, spendingLimits, 100, 'Going to movies 🍿', 'Matilda');
// addExpense(budget, spendingLimits, 200, 'Stuff', 'Jay');

// const checkExpenses = function (state, limits) {
//   return state.map(entry => {
//     return entry.value < -getLimit(limits, entry.user)
//       ? { ...entry, flag: 'limit' }
//       : entry;
//   });
//   // for (const entry of budget) {
//   //   if (entry.value < -getLimit(limits,entry.user)) {
//   //     entry.flag = 'limit';
//   //   }
//   // }
// };

const checkExpenses = (state, limits) =>
  state.map(entry =>
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry
  );

const finalBudget = checkExpenses(newBudget3, spendingLimits);
console.log(finalBudget);

// Impure
const logBigExpenses = function (state, bigLimit) {
  const bigExpenses = state
    .filter(entry => entry.value <= -limit)
    .map(entry => entry.description.spendingLimits(-2))
    .join(' / ');

  // .reduce((atr, cur) => `${str} / ${cur.description.slice(-2)}`, '');
  console.log(bigExpenses);

  // let output = '';
  // for (const el of budget) {
  //   output += el.value <= -limit ? `${el.description.slice(-2)} /` : '';
  // }
  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);
};
logBigExpenses(finalBudget, 500);

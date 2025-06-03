/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

/////////////////////////////////////////////////
/////////////////////////////////////////////////

/////////////////////////////////////////////////
/////////////////////////////////////////////////

/////////////////////////////////////////////////
/////////////////////////////////////////////////

/////////////////////////////////////////////////
/////////////////////////////////////////////////

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'c', 'e'];

// // slice method
// // console.log(arr.slice(2));
// // console.log(arr.slice(2, 4));
// // console.log(arr.slice(-2));
// // console.log(arr.slice(-1));
// // console.log(arr.slice(1, -2));

// // splice
// // mutates original
// // console.log(arr.splice(2))
// // console.log(arr(-1));
// // console.log(arr);

// // reverse
// // mutates original
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// // concat
// const letters = arr.concat(arr2);
// console.log(letters);

// // join
// console.log(letters.join('-'));

// const arr = [23, 11, 13];
// console.log(arr[0]);
// console.log(arr.at(0));

// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// console.log('luka'.at(1));

// for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(i + ' you deposited');
//   } else {
//     console.log('you withdrew');
//   }
// }

// console.log('//////////foreach//////////');

// movements.forEach(function (movement, index, array) {
//   if (movement > 0) {
//     console.log(index + array + ' you deposited');
//   } else {
//     console.log('you withdrew');
//   }
// });

// foreach and map
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

// currenciesUnique.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });
/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);
//   console.log(dogsJuliaCorrected);
//   const dogs = dogsJuliaCorrected.concat(dogsKate);
//   console.log(dogs);

//   dogs.forEach(function (dog, i) {
//     if (dog >= 3) {
//       console.log('dog' + (i + 1));
//     } else {
//       console.log('puppy');
//     }
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;
// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

// console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const mov of movements) {
//   movementsUSDfor.push(mov * eurToUsd);
// }
// console.log(movementsUSDfor);

// const movementsUSDArrow = movements.map(mov => mov * eurToUsd);

// const deposits = movements.filter((mov, i) => mov > 0 && i > 0);
// console.log(deposits);

// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// console.log(depositsFor);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// const balance = movements.reduce((acc, cur, i, arr) => acc + cur, 10000);
// console.log(balance);

// let balance2 = 0;
// for (const mov of movements) {
//   balance2 += mov;
// }
// console.log(balance2);

// maximum value
// const max = movements.reduce(
//   (acc, mov) => (acc > mov ? acc : mov),
//   movements[0]
// );
// console.log(max);

//////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀

*/
// const calcAverageHumanAge = function (ages) {
//   const humanAge = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
//   const adults = humanAge.filter(age => age >= 18);

//   // const sumAge = adults.reduce((acc, cur) => acc + cur);
//   // const sumAge = adults.reduce(
//   //   (acc, cur) => acc + cur,
//   //   0
//   // );
//   // const average = sumAge / adults.length;
//   const sumAgeAverage = adults.reduce(
//     (acc, cur, i, arr) => acc + cur / arr.length,
//     0
//   );

//   console.log(`human age: ${humanAge}`);
//   console.log(`adult age: ${adults}`);
//   // console.log(`sum of ages: ${sumAge}`);

//   // console.log(`average: ${average}`);
//   console.log(`average: ${sumAgeAverage}`);
//   console.log(`/////////////////`);

//   return sumAgeAverage;
// };
// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);

// const eurToUsd = 1.1;

// // Pipeline
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   // .map((mov) => mov * eurToUsd)
//   .map((mov, i, arr) => {
//     // console.log(arr);
//     return mov * eurToUsd;
//   }, 0)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositsUSD);

///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const calcAverageHumanAge = ages =>
//   ages
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);

// const firstWidthdrawal = movements.find(mov => mov < 0);
// console.log(firstWidthdrawal);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// for (const acc of accounts) {
//   if (acc.owner === 'Jessica Davis') console.log(acc);
// }

// console.log(movements);

// const lastWithdrawal = movements.findLast(mov => mov < 0);
// console.log(lastWithdrawal);

// const latestsLargeMovementIndex = movements.findLastIndex(
//   mov => Math.abs(mov) > 1000
// );
// console.log(latestsLargeMovementIndex);
// console.log(
//   `Your latest large movements was ${
//     movements.length - latestsLargeMovementIndex - 1
//   } movements ago`
// );

console.log(movements);
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 500);
console.log(anyDeposits);

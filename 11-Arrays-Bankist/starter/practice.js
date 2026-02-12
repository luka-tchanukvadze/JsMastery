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

// console.log(movements);
// console.log(movements.some(mov => mov === -130));

// const anyDeposits = movements.some(mov => mov > 500);
// console.log(anyDeposits);

// // every
// console.log(movements.every(mov => mov > 0));

// // Separate callback
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

/*
This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"
2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

TEST DATA:
*/

// const breeds = [
//   {
//     breed: 'German Shepherd',
//     averageWeight: 32,
//     activities: ['fetch', 'swimming'],
//   },
//   {
//     breed: 'Dalmatian',
//     averageWeight: 24,
//     activities: ['running', 'fetch', 'agility'],
//   },
//   {
//     breed: 'Labrador',
//     averageWeight: 28,
//     activities: ['swimming', 'fetch'],
//   },
//   {
//     breed: 'Beagle',
//     averageWeight: 12,
//     activities: ['digging', 'fetch'],
//   },
//   {
//     breed: 'Husky',
//     averageWeight: 26,
//     activities: ['running', 'agility', 'swimming'],
//   },
//   {
//     breed: 'Bulldog',
//     averageWeight: 36,
//     activities: ['sleeping'],
//   },
//   {
//     breed: 'Poodle',
//     averageWeight: 18,
//     activities: ['agility', 'fetch'],
//   },
// ];

// // 1
// const huskyWeight = breeds.find(breed => breed.breed === 'Husky').averageWeight;
// console.log(huskyWeight);

// // 2
// const dogBothActivities = breeds.find(
//   breed =>
//     breed.activities.includes('fetch') && breed.activities.includes('running')
// ).breed;
// console.log(dogBothActivities);

// // 3
// const allActivities = breeds.flatMap(breed => breed.activities);
// console.log(allActivities);

// // 4
// const uniqueActivities = [...new Set(allActivities)];
// console.log(uniqueActivities);

// // 5
// const swimmingAdjacent = [
//   ...new Set(
//     breeds
//       .filter(breed => breed.activities.includes('swimming'))
//       .flatMap(breed => breed.activities)
//       .filter(activity => activity !== 'swimming')
//   ),
// ];
// console.log(swimmingAdjacent);

// // 6
// console.log(breeds.every(breed => breed.averageWeight > 10));

// // 7
// console.log(breeds.some(breed => breed.activities.length >= 3));

// // bonus
// const fetchBreeds = breeds
//   .filter(breed => breed.activities.includes('fetch'))
//   .map(breed => breed.averageWeight);
// const heaviestFetchBreed = Math.max(...fetchBreeds);

// console.log(fetchBreeds);

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, 5, 6], 7, 8];
// // console.log(arrDeep.flat());
// console.log(arrDeep.flat(2));

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);

// const allMovements = accountMovements.flat();
// console.log(allMovements);

// const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

// const overalBalance2 = accounts
//   // .map(acc => acc.movements).flat()
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

// strings
// const owners = ['jonas', 'zach', 'adam'];
// console.log(owners.sort());

// // numbers
// console.log(movements);
// console.log(movements.sort());

// movements.sort((a, b) => b - a);
// console.log(movements);

const oaccount1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: 'premium',
};

const oaccount2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'standard',
};

const oaccount3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'premium',
};

const oaccount4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'basic',
};

const oaccounts = [oaccount1, oaccount2, oaccount3, oaccount4];

// console.log(movements);

// const groupedMovements = Object.groupBy(movements, movement =>
//   movement > 0 ? 'deposits' : 'withdrawals'
// );
// // console.log(groupedMovements);

// const groupedByActivity = Object.groupBy(oaccounts, account => {
//   const movementCount = account.movements.length;

//   if (movementCount >= 8) return 'very active';
//   if (movementCount >= 4) return 'active';
//   if (movementCount >= 1) return 'moderate';
//   return 'inactive';
// });

// // console.log(groupedByActivity);

// // const groupedAccounts = Object.groupBy(oaccounts, account => account.type);
// const groupedAccounts = Object.groupBy(oaccounts, ({ type }) => type);
// console.log(groupedAccounts);

// const x = new Array(7);
// // only fill will work
// // x.fill(1);
// x.fill(1, 3, 5);
// console.log(x);

// // Array.from
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value')
//   );
//   console.log(movementsUI.map(el => Number(el.textContent.replace('a', ''))));
// });

// console.log(movements);
// // const revesedMov = movements.reverse();
// const revesedMov = toReversed();
// console.log(revesedMov);

// // toSroted (sort), toSpliced (splice)

// // new (with)
// // movements[1] = 2000
// // console.log(movements);
// const newMovements = movements.with(1, 2000);

// console.log(newMovements);

// const backDepsitSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((sum, cur) => sum + cur, 0);
// console.log(backDepsitSum);

// // const numDeposits1000 = accounts
// //   .flatMap(acc => acc.movements)
// //   .filter(mov => mov > 1000).length;

// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

// console.log(numDeposits1000);

// // orefixed ++ operator
// let a = 10;
// console.log(a++);
// console.log(++a);

// // const sums = accounts
// const { deposits, widthdrawals } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       // cur > 0 ? (sums.deposits += cur) : (sums.widthdrawals += cur);
//       sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;

//       return sums;
//     },
//     { deposits: 0, widthdrawals: 0 }
//   );

// // console.log(sums);

// // this is a nice title => This Is a Nice Title

// const converTitleCase = function (title) {
//   const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with', 'and'];

//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word =>
//       exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join(' ');

//   return titleCase;
// };

// console.log(converTitleCase('this is a nice title'));
// console.log(converTitleCase('this is a LONG title but not too long'));

///////////////////////////////////////
// Coding Challenge #5

/* 
Julia and Kate are still studying dogs. This time they are want to figure out if the dogs in their are eating too much or too little food.

- Formula for calculating recommended food portion: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
- Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
- Eating an okay amount means the dog's current food portion is within a range 10% above and below the recommended portion (see hint).

YOUR TASKS:
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property. Do NOT create a new array, simply loop over the array (We never did this before, so think about how you can do this without creating a new array).
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.
9. Group the dogs by the number of owners they have
10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

GOOD LUCK 😀
*/

// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
//   { weight: 18, curFood: 244, owners: ['Joe'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] },
// ];

// // 1
// dogs.forEach(dog => (dog.recFood = Math.floor(dog.weight ** 0.75 * 28)));
// console.log(dogs);

// // 2
// const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
// console.log(
//   `Sarah's dog eats too ${
//     dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
//   }`
// );

// // 3
// const ownersTooMuch = dogs
//   .filter(dog => dog.curFood > dog.recFood)
//   .flatMap(dog => dog.owners);

// const ownersTooLittle = dogs
//   .filter(dog => dog.curFood < dog.recFood)
//   .flatMap(dog => dog.owners);

// console.log(ownersTooMuch);
// console.log(ownersTooLittle);

// // 4
// console.log(`${ownersTooMuch.join(' and ')}'s dogs are eating too much`);
// console.log(`${ownersTooLittle.join(' and ')}'s dogs are eating too little`);

// // 5
// console.log(dogs.some(dog => dog.curFood === dog.recFood));

// // 6
// const checkEatingOkay = dog =>
//   dog.curFood < dog.recFood * 1.1 && dog.curFood > dog.recFood * 0.9;

// console.log(dogs.every(checkEatingOkay));

// // 7
// const dogsEatingOkay = dogs.filter(checkEatingOkay);
// console.log(dogsEatingOkay);

// // 8
// const dogsGroupedByPortion = Object.groupBy(dogs, dog => {
//   if (dog.curFood > dog.recFood) {
//     return 'too much';
//   } else if (dog.curFood < dog.recFood) {
//     return 'too-little';
//   } else {
//     return 'exact';
//   }
// });
// console.log(dogsGroupedByPortion);

// // 9
// const dogsGroupedByOwners = Object.groupBy(
//   dogs,
//   dog => `${dog.owners.length}-owners`
// );
// console.log(dogsGroupedByOwners);

// // 10
// const dogsSorted = dogs.toSorted((a, b) => a.recFood - b.recFood);
// console.log(dogsSorted);

// practice

// let arr = ['a', 'b', 'c', 'c', 'e'];

// // // slice method
// console.log(arr.slice(1));
// console.log(arr.slice(0, 1));
// console.log(arr.slice(2, 1));
// console.log(arr.slice(1, -1));

// // // splice
// // // mutates original
// // console.log('---');
// // const spliced = arr.splice(1, 2);

// // console.log('a', spliced.splice(1, 2));
// // console.log(spliced);
// // console.log(arr);

// // // reverse
// // // mutates original
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// console.log('---');

// // // concat
// console.log(arr.concat([2, 3, 4]));
// const letters = arr.concat(arr2);
// console.log(letters);

// // // join
// console.log(arr.join('-'));

// const arr = [23, 11, 13];
// console.log(arr[0]);
// console.log(arr.at(0));

// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// console.log('luka'.at(1));
// console.log('luka'[0]);

// // for (const movement of movements) {
// for (const movement of movements.entries()) {
//   if (movement > 0) {
//     console.log(' you deposited');
//   } else {
//     console.log('you withdrew');
//   }
// }

// console.log('----------------');

// // foreach
// movements.forEach((i, movement, arr) => {
//   if (movement > 0) {
//     // console.log(i + ' you deposited ' + typeof arr);
//     // console.log(arr + 'a');
//     console.log(movement);
//     // console.log(arr);
//   } else {
//     console.log('you withdrew');
//   }
// });

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR', 'EUR']);

// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// challenge 1
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

// const checkDogs = (dogsJulia, dogsKate) => {
//   let juliasDogs = [...dogsJulia];
//   juliasDogs.splice(0, 1);
//   juliasDogs.splice(-2);

//   const bothCorrected = [...juliasDogs, ...dogsKate];
//   // const bothCorrected = juliasDogs.concat(dogsKate);

//   for (let i = 0; i < bothCorrected.length; i++)
//     bothCorrected[i] >= 3
//       ? console.log(`Dog ${i} is adult age is ${bothCorrected[i]}`)
//       : console.log(`young n ${i}`);
// };

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);
//   // dogsJulia.slice(1, 3);
//   const dogs = dogsJuliaCorrected.concat(dogsKate);
//   console.log(dogs);

//   dogs.forEach(function (dog, i) {
//     if (dog >= 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//     }
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

///////////////////////////////////////
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

///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const calcAverageHumanAge = arr => {
//   const ages = arr
//     .map(age => {
//       return age <= 2 ? age * 2 : 16 + age * 4;
//     })
//     .filter(age => age >= 18)
//     .reduce((acc, cur, i, arr) => {
//       return acc + cur / arr.length;
//     }, 0);

//   console.log(humanAge);
// };

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);

/**
 *
 * sum up nested array
 */

const sumNestedArray = arr => {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    console.log('number', arr[i]);
    console.log('index', i);

    if (Array.isArray(arr[i])) {
      sum += sumNestedArray(arr[i]);
    } else {
      sum += arr[i];
    }

    console.log('sum', sum);
    console.log('----');
  }

  return sum;
};

const numbers = [1, 2, [3, 4], [5, [6, 7]]];
console.log(sumNestedArray(numbers)); // 28

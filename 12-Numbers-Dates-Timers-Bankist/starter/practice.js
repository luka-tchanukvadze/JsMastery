// // converting
// console.log(+'23');

// // parsing
// console.log(Number.parseInt('30px'));
// console.log(Number.parseInt('e30'));
// console.log(Number.parseInt('30px', 10));

// console.log(Number.parseFloat('2.5rem'));
// console.log(Number.parseInt('2.5rem'));

// // check if value is nan
// console.log(Number.isNaN(20));
// console.log(Number.isNaN('20'));
// console.log(Number.isNaN(+'20'));
// console.log(Number.isNaN(23 / 0));

// // checking if nvalue is number
// console.log(Number, isFinite(20));
// console.log(Number, isFinite('20'));
// console.log(Number, isFinite(23 / 0));

// console.log(Number.isInteger(23));
// console.log(Number.isInteger(23.0));
// console.log(Number.isInteger(23.1));

// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));
// console.log(8 ** (1 / 3));

// console.log(Math.max(5, 234, 23, 52));
// console.log(Math.max(5, 234, 23, 52, '23px'));
// console.log(Math.min(5, 234, 23, 52));

// console.log(Math.PI * Number.parseFloat('10px') ** 2);

// console.log(Math.trunc(Math.random() * 6) + 1);

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1)) + min;

// console.log(randomInt(10, 20));
// randomInt(0, 3);

// // Rounding integers
// console.log(Math.trunc(23.3));
// console.log(Math.round(23.3));
// console.log(Math.ceil(23.3));
// console.log(Math.floor(23.3));

// // rounding decimals
// console.log((2.5).toFixed(0));
// console.log((2.5).toFixed(1));
// console.log((2.5).toFixed(2));
// console.log(+(2.5).toFixed(2));

// The rimainer operator
// console.log(5 % 2);
// console.log(8 % 3);
// console.log(8 % 2);

// console.log(6 % 2);
// console.log(7 % 2);

// const isEven = n => n % 2 === 0;
// console.log(isEven(2));
// console.log(isEven(3));

// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('movements__row')];
//   array.forEach((row, i) => {
//     if (i % 2 === 0) row.style.backgroundColor = 'orangered';
//   });
// });

// numeric separators

// 324,323,323
// const diameter = 3_242_000_000;
// console.log(diameter);

// const priceCents = 345_99;
// console.log(priceCents);

// const ransferFee = 15_00;

// console.log(Number('23_000'));
// console.log(Number('23000'));

// console.log(2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(2 ** 53 + 2);
// console.log(2 ** 53 + 0);

// console.log(44444444444444423432432432432432432n);
// console.log(BigInt(322222222222222222222222222222222222222224n));

// //operations
// console.log(432432n + 3232432n);

// const num = 23;
// const huge = 34329493294932n;
// // console.log(huge * num);
// console.log(huge * BigInt(num));

// console.log(20n > 15);
// console.log(20n == 20);
// console.log(20n === 20);

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(+future);

// const calcDaysPassed = (date1, date2) =>
//   Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));

// const days1 = calcDaysPassed(new Date(2037, 10, 14), new Date(2037, 10, 24));
// console.log(days1);

// const num = 42424.23;

// const options = {
//   // style: 'unit',
//   style: 'currency',
//   unit: 'mile-per-hour',
//   currency: 'EUR',
// };

// console.log('US: ', new Intl.NumberFormat('en-US', options).format(num));

// setTimeout
// const ingredients = ['olives', '/'];
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => {
    console.log('here is your pizza', ing1, ing2);
  },
  3000,
  ...ingredients
);

console.log('Waiting...');

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// setInterval
setInterval(() => {
  const now = new Date();
  console.log(now);
}, 1000);

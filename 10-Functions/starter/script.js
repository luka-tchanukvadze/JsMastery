'use strict';

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // ES5
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };

//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 3, 800);
// createBooking('LH123', 3);
// createBooking('LH123', undefined, 800);

// const flight = 'LH123';

// const luka = {
//   name: 'Luka Chanu',
//   passport: 32324324324,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'MR. ' + passenger.name;

//   if (passenger.passport === 4324324324) {
//     alert('checked in');
//   } else {
//     alert('wrong passport');
//   }
// };

// checkIn(flight, luka);
// console.log(flight);
// console.log(luka);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000);
// };

// newPassport(luka);
// checkIn(flight, luka);

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher-order function
// const transfomer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Tranformed by: ${fn.name}`);
// };

// transfomer('Javascript is the best!', upperFirstWord);
// transfomer('Javascript is the best!', oneWord);

// // JS uses callbacks all the time
// const high5 = function () {
//   console.log('five');
// };

// document.body
//   .addEventListener('click', high5)

//   [('jonas', 'martcha', 'adam')].forEach(high5);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);

//     return function (name2) {
//       console.log(name2);
//     };
//   };
// };

// const greeterHey = greet('hey');
// greeterHey('luka');

// greet('hello')('Luka')('good');

// // challenge

// const greetArr = greeting => name => console.log(`${greeting} ${name}`);
// greetArr('hello')('Luka');

// const lufthansa = {
//   airline: 'Luthansa',
//   iataCode: 'LH',
//   bookings: [],

//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
//     );
//     this.bookings.push({ flight: `light ${this.iataCode} ${flightNum}` });
//   },
// };

// lufthansa.book(234, 'Luka Chanu');
// lufthansa.book(442, 'John Smith');
// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// // Does NOT work
// // book(23, 'wow wow')

// book.call(eurowings, 23, 'Sarah Williams');

// book.call(lufthansa, 234, 'Spider Man');

// const swiss = {
//   airline: 'Swiss Air lines',
//   iataCode: 'lx',
//   bookings: [],
// };

// book.call(swiss, 424, 'Mary Jayn or whaterver');
// console.log(swiss);

// // Apply method
// const flightData = [523, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);
// console.log(swiss);

// // the bind methode
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'steven williams');
// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('random');
// bookEW23('random2');

// // With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial application

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(100));

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));

// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     // Get answer
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     console.log(answer);

//     // Register answer
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     this.displayResults();
//     this.displayResults('string');
//   },

//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       // Poll results are 13, 2, 4, 1
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// // poll.registerNewAnswer()
// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// const runOnce = function () {
//   console.log('this will never run again');
// };
// runOnce();

// // iife
// (function () {
//   console.log('REALLY: this will never run again');
// })();

// (() => console.log('REALLY: this will never run again'))();

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

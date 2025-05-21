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

const lufthansa = {
  airline: 'Luthansa',
  iataCode: 'LH',
  bookings: [],

  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `light ${this.iataCode} ${flightNum}` });
  },
};

lufthansa.book(234, 'Luka Chanu');
lufthansa.book(442, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'wow wow')

book.call(eurowings, 23, 'Sarah Williams');

book.call(lufthansa, 234, 'Spider Man');

const swiss = {
  airline: 'Swiss Air lines',
  iataCode: 'lx',
  bookings: [],
};

book.call(swiss, 424, 'Mary Jayn or whaterver');
console.log(swiss);

// Apply method
const flightData = [523, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);
console.log(swiss);

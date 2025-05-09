'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}`
    );
  },

  orderPasta: function (ing11, ing2, ing3) {
    console.log(`Here is your delicious pasta intgredients: ${ing11}`);
  },
};

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// let [x, y, z] = arr;
// // console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// // console.log(first, second);

// // switching variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;

// [main, secondary] = [secondary, main];

// // Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);

// // Nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, ,j] = nested
// // console.log(i, j)
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // default values
// const [p = 1, q = 1, r = 1] = [8, 9];

////////////// object destructuring

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurant, hours, tags);

// // Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// // nested objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

//////////////////// spread operator

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1]];

// const newArr = [1, 2, ...arr];

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// const mainMenuCopy = [...restaurant.mainMenu];

// // join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// // real world example
// // iterables: arrays, strings, maps, sets. NOT object
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(...str);
// // console.log(`${...str}`)

// const ingredients = [
//   prompt("let's make pasta"),
//   prompt("let's make pasta"),
//   prompt("let's make pasta"),
// ];

// restaurant.orderPasta(...ingredients);

// // Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCOpy = { ...restaurant };
// restaurantCOpy.name = 'Ristorante Roma';

// const a = [1, 2, 3];
// const b = [...a];
// b[1] = 5;
// console.log(a);
// console.log(b);

////////////////////////// Rest pattern  and Parameters

const [a, b, ...others] = [1, 2, 3, 4, 5];

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

// Objects
const { sat, ...weekdays } = restaurant.openingHours;

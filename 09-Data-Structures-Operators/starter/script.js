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

const openingHours = {
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
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // es6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}`
    );
  },

  orderPasta: function (ing11, ing2, ing3) {
    console.log(`Here is your delicious pasta intgredients: ${ing11}`);
  },

  orderPizza: function (mainIngredient, ...otherImgredients) {
    console.log(mainIngredient);
    console.log(otherImgredients);
  },
};

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
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

// const [a, b, ...others] = [1, 2, 3, 4, 5];

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// // Objects
// const { sat, ...weekdays } = restaurant.openingHours;

// // functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
// };

// const x = [23, 5, 6];
// add(...x);

// add(2, 3);
// add(5, 3, 7, 2, 9);

// restaurant.orderPasta('mushrooms', 'onion');

// use any data type, return any data type, short-circuting
// console.log(3 || 'jonas');
// console.log('' || 'luka');
// console.log(undefined || 'luka');
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'hello' || 23 || null);

// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

// const guests2 = restaurant.numGuests || 10;

// console.log('------ and -------');
// console.log(0 && 'luka');
// console.log(7 && 'luka');

// console.log('helo' && 23 && null && null);

// if (restaurant.orderPizza) {
//   restaurant.orderPasta('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPasta('mushrooms', 'spinach');

//////////////////////////////// nullish coalescing operator

// restaurant.numGuests = 0;

// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // Nullish: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;

//////////////////// logical assignment operators

// const res1 = {
//   name: 'one',
//   numGuests: 20,
// };

// const res2 = {
//   name: 'two',
//   owner: 'someone',
// };

// // short circuiting
// // res1.numGuests = res1.numGuests || 10;
// // res2.numGuests = res2.numGuests || 10;

// // OR assignment operator
// // res1.numGuests ||= 10;
// // res2.numGuests ||= 10;

// // nullish assignment operator (null or undefined)
// res1.numGuests ??= 10;
// res2.numGuests ??= 10;

// // res1.owner = res1.owner && '<ANONYMOUS>';
// // res2.owner = res2.owner && '<ANONYMOUS>';

// res1.owner &&= '<ANONYMOUS>';
// res2.owner &&= '<ANONYMOUS>';

// console.log(res1);
// console.log(res2);

////////////////////////// Challenge 1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

// 1
// const [players1, players2] = game.players;
// console.log(players1, players2);

// // 2
// const [gk, ...filedPlayers] = players1;

// // 3
// const allPlayers = [...players1, players2];
// console.log(allPlayers);

// // 4
// const players1Final = [...players1, 'Thiago', 'coutinho', 'persicic'];

// // 5
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// // 6
// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
// };
// printGoals('davies', 'muller', 'lewandowski');

// printGoals(...game.scored);

// // 7
// team1 < team2 && console.log('team 1 is more likely to win');
// team2 < team1 && console.log('team 2 is more likely to win');

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// console.log([...menu.entries()]);

///////////////////////// enhanced object literals

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// // with optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// // example
// const days = ['mon', 'tue', 'wed'];

// for (const day of days) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day} we open at ${open}`);
// }

// // methods
// console.log(restaurant.order?.(0, 1) ?? 'method does not exit');
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
}

console.log(openStr);

const values = Object.values(openingHours);

// Entrie object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

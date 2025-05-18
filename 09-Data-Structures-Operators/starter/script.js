'use strict';

const { split } = require('lodash');

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
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of Object.keys(openingHours)) {
//   openStr += `${day}, `;
// }

// console.log(openStr);

// const values = Object.values(openingHours);

// // Entrie object
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// 1.
// for (const [i, player] of game.scored.entries())
//   console.log(`Goal ${i + 1}: ${player}`);

// // 2.
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of Object.values(game.odds)) average += odd;
// average /= odds.length;

// console.log(average);

// // 3.
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ... ${odd}`);
// }

// // 4.
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// // }

// const ordersSet = new Set(['pasta', 'pizza', 'pizza']);
// console.log(ordersSet);

// console.log(new Set('Luka'));

// console.log(ordersSet.size);
// console.log(ordersSet.has('pizza'));
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// console.log(ordersSet);
// ordersSet.clear();
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// // example
// const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(new Set(staff).size);

// const commonFoods = italianFoods.intersection(mexicanFoods);
// console.log('Intersection', commonFoods);
// console.log([...commonFoods]);

// const italianMexicanFusion = italianFoods.union(mexicanFoods);
// console.log('Union:', italianMexicanFusion);

// console.log(new Set([...italianFoods, ...mexicanFoods]));
// console.log([...new Set([...italianFoods, ...mexicanFoods])]);

// const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
// console.log('Difference italian', uniqueItalianFoods);

// const uniqueItalianAndMexicanFoods =
//   italianFoods.symmetricDifference(mexicanFoods);
// console.log(uniqueItalianAndMexicanFoods);

// console.log(italianFoods.isDisjointFrom(mexicanFoods));

// const rest = new Map();
// rest.set('name', 'classico italiano');
// rest.set(1, 'firenze, italy');
// rest.set(2, 'Lisbon, Portugal');

// rest
//   .set('categories', ['italian', 'pizzeria'])
//   .set('open', 11)
//   .set(true, 'we are open')
//   .set(false, 'we are closed');

// console.log(rest.get('name'));
// console.log(rest.get(true));

// const time = 21;
// rest.get(time > rest.get('open') && time < rest.get('close'));

// console.log(rest.has('categories'));
// rest.delete(2);

// console.log(rest.size);
// // rest.clear();

// rest.set([1, 2], 'Test');

// console.log(rest.get([1, 2]));

// const arr = [1, 2];
// rest.set(arr, 'Test');
// console.log(rest.get(arr));

// const question = new Map([
//   ['question', 'what is the best programming language in the world'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'Try again!'],
// ]);

// // Conver object to map
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// console.log(question.question);
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// const answer = prompt('Your answer');
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// console.log([...question]);
// console.log(...question.entries());
// console.log(...question.keys());
// console.log(...question.values());

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// // 1
// const events = new Set(gameEvents.values());

// // 2
// gameEvents.delete(64);
// console.log(gameEvents);

// // 3
// const minutes = [...gameEvents.keys()].pop();
// console.log(minutes);
// console.log(`An event happened, on averge every${minutes / gameEvents.size}`);

// // 4
// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? 'first' : 'second';
//   console.log(`${half}: ${min}: ${event}`);
// }

// const airline = 'Tap air protugal';
// const plane = 'a320';

// console.log(airline.toLowerCase());

// // fix capitalazation in name
// const passenger = 'lUka';
// const passengerLowe = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLowe[0].toLocaleUpperCase() + passengerLowe.slice(1);
// console.log(passengerCorrect);

// // comparing email
// const email = 'hello@luka.io';
// const loginEmail = '   hello@Luka.Io';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// // console.log(trimmedEmail)

// const nomralizedEmail = loginEmail.toLowerCase().trim();
// console.log(nomralizedEmail);
// console.log(email === nomralizedEmail);

// // replacing
// const priceGB = '2bb,97$';
// const priceUS = priceGB.replace('$', '*').replace(',', '.');
// console.log(priceUS);

// const announcement = 'all passengeers come to borading door door';

// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));

// console.log(announcement.replace(/door/g, 'gate'));

// // booleans
// const plane2 = 'Air a320neo';
// console.log(plane2.includes('a320'));
// console.log(plane2.startsWith('air'));
// console.log(plane2.startsWith('Air'));

// if (plane2.startsWith('Air') && plane2.endsWith('neo')) {
//   console.log('part of new airbus family');
// }

// // practice exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife')) {
//     console.log('you are not allowed on board');
//   } else {
//     console.log('welcome aboard');
//   }
// };

// checkBaggage('I have a laptop, some food and a pocket knife');

// split and join
// console.log('a+very+nice+string'.split('+'));
// console.log('luka chanu'.split(' '));

// const [firstName, lastName] = 'Luka Chanu'.split(' ');

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];

//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// };

// capitalizeName('luka chanu wow');

// // padding
// const message = 'go to gate 23!';
// console.log(message.padStart(25, '+').padEnd(30, '+'));

// // real world example
// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(243323243243352));

// // repeat
// const message2 = 'bad wather.. all departures delayed... ';
// console.log(message2.repeat(5));

// Coding Challenge #4

/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(second[0].toUpperCase())}`;

    console.log(`${output.padEnd(20)}${'W'.repeat(i + 1)}`);
  }
});

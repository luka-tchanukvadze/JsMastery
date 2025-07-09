// importing module
// import './shoppingCart.js';
// import {
//   addToCart,
//   totalPrice,
//   totalQuantity,
// } from './shoppingCart.js';
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(totalPrice, totalQuantity);
// console.log(price, tq);
// console.log('importing module');

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);

// import add, { totalPrice } from './shoppingCart.js';
// console.log(totalPrice);

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('apple', 2);
add('something', 2);

console.log(cart);

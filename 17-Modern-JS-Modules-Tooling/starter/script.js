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

// import add, { cart } from './shoppingCart.js';
// add('pizza', 2);
// add('apple', 2);
// add('something', 2);

// console.log(cart);

// this is blocking module execution
// const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// const data = await res.json();
// console.log(data);

// const getLastPost = async function () {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const data = await res.json();
//   // console.log(data);

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = getLastPost();
// console.log(lastPost);

// // No t very clean
// // lastPost.then(last => console.log(last));

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

const shoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 2344;
  const totalQuantity = 3;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} order from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

shoppingCart2.addToCart('apple', 3);

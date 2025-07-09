// exporting module
console.log('exporting module');

// blocking code
// console.log('start fetching users');
// await fetch(`https://jsonplaceholder.typicode.com/users`);
// console.log('finish fetching');

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added`);
};

const totalPrice = 2324;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };
// export { totalPrice, totalQuantity };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added`);
}

// converting
console.log(+'23');

// parsing
console.log(Number.parseInt('30px'));
console.log(Number.parseInt('e30'));
console.log(Number.parseInt('30px', 10));

console.log(Number.parseFloat('2.5rem'));
console.log(Number.parseInt('2.5rem'));

// check if value is nan
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20'));
console.log(Number.isNaN(23 / 0));

// checking if nvalue is number
console.log(Number, isFinite(20));
console.log(Number, isFinite('20'));
console.log(Number, isFinite(23 / 0));

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23.1));

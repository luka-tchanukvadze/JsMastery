// // Selection elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// //html collection
// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');

// document.getElementsByClassName('btn');

// // creating and inserting elements
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent = 'We use cookes for improved functionality and analytics'
// message.innerHTML =
//   'We use cookes for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// // header.prepend(message);
// // header.appened(message.cloneNode(true));
// header.append(message);

// // header.before(message);
// // header.after(message);

// // Delete elements
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

// // Styles
// message.style.backgroundColor = '#fff';
// message.style.width = '120%';

// console.log(message.style.height);
// console.log(message.style.backgroundColor);

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// // attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);

// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company', 'bankist');

// logo.src;
// logo.getAttribute('src');

// // data attributes
// console.log(logo.CDATA_SECTION_NODE.versionNumber);

const h1 = document.querySelector('h1');

const alerth1 = function (e) {
  alert('addeventlistener, great');

  // intresting
  // h1.removeEventListener('mouseenter', alerth1);
};

h1.addEventListener('mouseenter', alerth1);

setTimeout(() => {
  h1.removeEventListener('mouseenter', alerth1);
}, 3000);

// h1.onmouseenter = function (e) {
//   alert('damn');
// };

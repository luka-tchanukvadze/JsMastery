'use strict';

function calcAge(birthYear) {
  const age = 2047 - birthYear;

  function printAge() {
    const output = `${firstNmae} you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1982 && birthYear <= 1996) {
      var millenial = true;
      const fristName = 'Luka';

      const str = `oh and you are a millenial, ${firstNmae}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = 'NEW OUTPUT';
    }

    // console.log(str)
    // console.log(millenial);
    // console.log(add(2, 4));
  }
  printAge();

  return age;
}

const firstNmae = 'Luka';
calcAge(2003);

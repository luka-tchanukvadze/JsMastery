'use strict';

function calcAge(birthYear) {
  const age = 2047 - birthYear;

  function printAge() {
    const output = `${firstNmae} you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1982 && birthYear <= 1996) {
      var millenial = true;
      const str = `oh and you are a millenial, ${firstNmae}`;
      console.log(str);
    }

    // console.log(str)
    console.log(millenial);
  }
  printAge();

  return age;
}

const firstNmae = 'Luka';
calcAge(2003);

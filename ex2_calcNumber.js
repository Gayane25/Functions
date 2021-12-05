'use strict';
/*Write a function that calculates sum, difference, multiplication and division between given array
elements depending on passed operation symbol. Write appropriate function for each operation.*/

const calcNumb = (array, operator) => {
  if (operator === '+') {
    return array.reduce((prev, next) => {
      return prev + next;
    });
  }
  if (operator === '-') {
    return array.reduce((prev, next) => {
      return prev - next;
    });
  }
  if (operator === '*') {
    return array.reduce((prev, next) => {
      return prev * next;
    });
  }
  if (operator === '/') {
    return array.reduce((prev, next) => {
      return prev / next;
    });
  }
};
console.log(calcNumb([15, 10, 3, 1], '/'));

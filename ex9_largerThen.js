'use strict';
/*Write a function which receives an array and a number as arguments and returns a new array from
the elements of the given array which are larger than the given number.*/

const largestNumbers = (arr, num) => {
  let newArr = arr.filter(el => el > num);
  if (newArr.length > 0) {
    return newArr;
  } else {
    return 'Such values do not exist.';
  }
};
console.log(largestNumbers([10, 25, 16, -5, 30, 15, 24], 16));

//Given an array of numbers. Write a function to separate odd and even numbers in different arrays.
function getSeperator(array) {
  let arrEven = [];
  let arrOdd = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      arrEven.push(array[i]);
    } else {
      arrOdd.push(array[i]);
    }
  }
  console.log(arrEven, arrOdd);
}
getSeperator([45, 12, 3, 6, 17, 0]);

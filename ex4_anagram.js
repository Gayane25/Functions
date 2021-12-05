'use strict';
//Given a word and a list of possible anagrams, select the correct sublist.

let getAnagram = (word, words) => {
  let anagramsArr = [];
  for (let el of words) {
    let count = 0;
    for (let i = 0; i < el.length; i++) {
      if (el.includes(word[i])) {
        count++;
      }
    }
    if (count === word.length && el.length === word.length) {
      anagramsArr.push(el);
    }
  }
  return anagramsArr;
};
console.log(
  getAnagram('pencil', ['licnep', 'circular', 'pupil', 'nilcpe', 'leppnec'])
);

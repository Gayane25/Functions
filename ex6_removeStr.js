'use strict';

/*Write a function which receives two strings and removes appearances of the second string from the
first one.*/

const removeStr = (text, letter) => {
  while (text.includes(letter)) {
    text = text.replace(letter, '');
  }
  return text;
};
console.log(
  removeStr(
    'Yes, London. You know: fish, chips, cup ‘o tea, bad food, worse weather',
    'o'
  )
);

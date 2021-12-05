'use strict';
const replaceChars = str => {
  let newStr = '';
  let strArr = [];
  for (let i = 0; i < str.length; i += 3) {
    if (str[i + 1] !== undefined || str[i + 2] !== undefined) {
      newStr = str.substring(i + 1, i + 3) + str[i];
      strArr.push(newStr);
    }
  }
  return strArr.join('');
};
console.log(replaceChars('aweyoolp'));

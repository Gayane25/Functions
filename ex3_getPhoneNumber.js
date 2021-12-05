'use strict';

/*Given a phone number. Write a function to clean it up, so it is valid. The rules are as follows:
If the phone number is less than 10 digits assume that it is a bad number
If the phone number is longer than 10, then it is a bad number
If the phone number is 10 digits assume that it is good
If the phone number consists of 11 symbols and the first one is + and others are numbers, then trim +
and return remaining 10 digits.
If the phone number contains + symbol more than one, consider it as a bad number.
If the phone number contains + symbol not as the first character, consider it as a bad number.
Ignore spaces between digits.
Input Output
“455678” “Bad number”
“339 5656888” “3395656888”
“+0008989562” “0008989562”
“45231489562” “Bad number”
“123+2356897452” “Bad number”*/
const getPhoneNumber = phoneNumber => {
  phoneNumber = phoneNumber.split('');
  let digits = [];
  for (let i = 0; i < phoneNumber.length; i++) {
    if (!isNaN(phoneNumber[i])) {
      digits.push(phoneNumber[i]);
    }
  }
  if (digits.length < 10 || digits.length > 10) {
    return 'Bad Number';
  }
  if (digits.length === 10) {
    return 'good Number';
  }
  if (phoneNumber.length === 11 && phoneNumber[0] === '+') {
    return phoneNumber.slice(1).join('');
  }
  if (phoneNumber.indexOf('+') !== phoneNumber.lastIndexOf('+')) {
    return 'bad number';
  }
  if (phoneNumber[0] !== '+') {
    return 'bad number';
  }
};
console.log(getPhoneNumber('+0008989562'));

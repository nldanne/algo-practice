/*
HackerRank - Strong Password

The website considers a password to be strong if it satisfies the following criteria:
  - Its length is at least 6.
  - It contains at least one digit.
  - It contains at least one lowercase English character.
  - It contains at least one uppercase English character.
  - It contains at least one special character. The special characters are: !@#$%^&*()-+ 
*/

// 'n' is the length of the password
function minimumNumber(n, password) {
  let numbers = '0123456789';
  let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let specialChars = '!@#$%^&*()-+';
  let num = 0;
  let lower = 0;
  let upper = 0;
  let special = 0;

  for(let i = 0; i < password.length; i++) {
    if (numbers.indexOf(password[i]) !== -1) {
      num = 1;
    }

    if (lowerCase.indexOf(password[i]) !== -1) {
      lower = 1;
    }

    if (upperCase.indexOf(password[i]) !== -1) {
      upper = 1;
    }

    if (specialChars.indexOf(password[i]) !== -1) {
      special = 1;
    }
  }

  if(password.length > 6) {
    return 4 - num - lower - upper - special;
  } else {
    if (password.length + (4-num-lower-upper-special) > 6) {
      return 4 - num - lower - upper - special;
    } else {
      return 6 - password.length;
    }
  }

}

let result = minimumNumber(3, 'abc');
console.log(result);  // expected output 3

let result2 = minimumNumber(11, '#HackerRank');
console.log(result2);   // expected output 1

let result3 = minimumNumber(12, '#HackerRank2');
console.log(result3);   // expected output 0

console.log(minimumNumber(4, 'abcd'));   //expected output 3


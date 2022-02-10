/*
HackerRank - Super Reduced String

Reduce a string of lowercase characters in range ascii[‘a’..’z’]
by doing a series of operations. In each operation, 
select a pair of adjacent letters that match, and delete them.

Delete as many characters as possible using this method and return 
the resulting string. If the final string is empty, return Empty String
*/

/*
Example:
string = 'aab';
'aab' shortens to 'b' in one operation: remove the adjecent 'a' charaters

string = 'abba';
remove the two 'b' characters leaving 'aa'. Remove the two 'aa' charcaters to leave ''.Return 'Empty String'
*/

function superReducer(string) {
  let splitArr = string.split('');
  let newArr = [];   //character stack for tracking characters

  // looping through the split string characters
  for (let i = 0; i < splitArr.length; i++) {
    if (newArr.length === 0) {
      newArr.push(splitArr[i]);
      // compare the last element of the character stack to the current character of the string
    } else if (newArr[newArr.length-1] === splitArr[i]) {
      newArr.pop();

    } else {
      // add new character to the stack 
      // if current string character doesn't match to the last element of the character stack
      newArr.push(splitArr[i]);
    }
  }

  if (newArr.length === 0) {
    return 'Empty string';
  } else {
    return newArr.join('');
  }
}

let string = 'aaabccddd';
let result = superReducer(string);
console.log(result);   // expected output 'abd'

let string2 = 'baab';
let result2 = superReducer(string2);
console.log(result2);   // expected output 'Empty string'

let string3 = 'cbaabc';
let result3 = superReducer(string3);
console.log(result3);   // expected output 'Empty string'

let string4 = 'cbaabcb';
let result4 = superReducer(string4);
console.log(result4);   // expected output 'b'
/*
HackerRank - Make Anagrams

Given two strings,'string1' and 'string2' , that may or may not be of the same length, 
determine the minimum number of character deletions required to make 'string1' and 'string2' anagrams. 
Any characters can be deleted from either of the strings. 
*/

/*
Example
string1 = 'cde'
string2 = 'dcf';

It takes 2 caharcter deletions --> remove 'e' and 'f'
*/
function makeAnagram(string1, string2) {  
  let split1 = string1.split('');
  
  split1.forEach((character) => {
    // if an element of 'split1' is in string2, remove it from both strings
    if (string2.includes(character)) { 
      string1 = string1.replace(character, '');
      string2 = string2.replace(character, '');
    }
  });
  return string1.length + string2.length;
}

let result = makeAnagram('cde', 'dcf');   
console.log(result);   // expected deletion: 2

let result2 = makeAnagram('abcs', 'abc');
console.log(result2);   // expected deletion: 4

let result3 = makeAnagram('cde', 'abc');
console.log(result3);   // expected deletion: 4


function makeAnotherAnagram(string1, string2) {
  let split = string1.split('');
  let split2 = string2.split('');
  let count = 0;
  let array1 = [];
  let array2 = [];

  for (let i = 0; i < string1.length; i++) {
    for (let j = 0; j < string2.length; j++) {
      if(string1[i] === string2[j]) {
        array1.push(string1[i]);
        array2.push(string2[j]);

        split.splice(i, 1);
        split2.splice(j, 1);
      }
    }
  }

  count = split.length + split2.length;
  return count;
}

let result4 = makeAnotherAnagram('abd', 'abc');
console.log(result4);   // expected deletion: 2

let result5 = makeAnotherAnagram('abdcde', 'abcxy');
console.log(result5);   // expected deletion: 5
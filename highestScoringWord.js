/*
CodeWars - Highest Scoring Word

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

*/

function high(x){
  let abc = 'abcdefghijklmnopqrstuvwxyz'; 
  let stringArr = x.split(' ');  // split strings along spaces
  let allScores = [] ;
  
  for (let i = 0; i < stringArr.length; i++) {
  let highScore = 0;
    
    for (let j = 0; j < stringArr[i].length; j++) {
      highScore += abc.indexOf(stringArr[i][j])+1;
    }
    allScores.push(highScore);
  }
  
  let maxScore = 0;
  let index = 0;
  for (let k = 0; k < allScores.length; k++) {
    let currentScore = allScores[k];
    if (currentScore > maxScore) {
      maxScore = currentScore;
      index = k;
    }
  }
  
  return stringArr[index];
}

let string1 = 'man i need a taxi up to ubud';
console.log(high(string1));   // expected out put 'taxi'

let string2 = 'what time are we climbing up the volcano';
console.log(high(string2));   // expected out put 'volcano'

let string3 = 'take me to semynak';
console.log(high(string3));   // expected out put 'semynak'

let string4 = 'aa b';
console.log(high(string4));   // expected out put 'aa'

let string5 = 'b aa';
console.log(high(string5));   // expected out put 'b'

/*
CodeWars - String Array Duplicates

In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

    dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

    dup(["kelless","keenness"]) = ["keles","kenes"].

*/

function dup(stringArray) {
  let newArr = [];

  for (let i = 0; i < stringArray.length; i++) {
    let word = '';
  
    for (let j = 0; j <stringArray[i].length; j++) {
      if (word.length === 0) {
        word += stringArray[i][j];
      } else if (word[word.length -1] !== stringArray[i][j]) {
        word += stringArray[i][j];
      }
    }
    newArr.push(word);
  }
  return newArr;
};

let array = ["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"];
let result = dup(array);
console.log(result);

/*
CodeWards - Exes and Ohs

Check to see if a string has the same amount of 'x's and 'o's. 
The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

*/

function XO(string) {
  let countX = 0;
  let countO = 0;
  
  for (let i = 0; i < string.length; i++) {
    if(string[i].toLowerCase() === 'x') {
      countX++;
    } else if (string[i].toLowerCase() === 'o') {
      countO++;
    }
  }
  
  if(countX === countO){
    return true;
  } else {
    return false;
  } 
}

console.log(XO('xxOOO'))  // false
console.log(XO('xxOO'))  // true
console.log(XO('xxmO'))  // false
console.log(XO('mmmpp'))  // true
console.log(XO('xxOOmm'))  // true



/*
CodeWars - Find the unique number

There is an array with some numbers. All numbers are equal except for one. Try to find it!

Example:
findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.
*/

function findUniq(arr) {
  let sorted = arr.sort();
  let uniqueNumber;

  if(sorted[0] === sorted[1]) {
    uniqueNumber = sorted[sorted.length -1];
  } else {
    uniqueNumber = sorted[0];
  }

  return uniqueNumber;

}

let array = [1, 0, 0];
console.log(findUniq(array));  // 1

console.log(findUniq([2,3,3,3,]));  // 2
console.log(findUniq([5,5,5,3,5,5,5,5,5]));  // 3
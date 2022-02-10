/*
HackerRank - Birthday Cake Candles

You are in charge of the cake for a child's birthday. 
You have decided the cake will have one candle for each year of their total age. 
They will only be able to blow out the tallest of the candles. 
Count how many candles are tallest. 
*/

/*
Example: 
candles = [4,4,1,3]
The maximum height candles are 4 units high. There are 2 of them, so return 2.
*/

function birthdayCakeCandles(candles) {
  let tallest = Math.max(...candles);
  let count = 0;

  for (let i = 0; i < candles.length; i++) {
    if (candles[i] === tallest) {
      count++;
    }
  }
  return count;
}

let myCandles = [4,4,3,2];
console.log(birthdayCakeCandles(myCandles));   // expected output 2

let myCandles2 = [1, 6, 3, 10];
console.log(birthdayCakeCandles(myCandles2));   // expected output 1

let myCandles3 = [11, 11, 11, 10];
console.log(birthdayCakeCandles(myCandles3));   // expected output 3

console.log('--');
// --------------------------------------------------
function birthdayCandles(candles) {
  let max = 0;
  let count = 0;

  for (let i = 0; i < candles.length; i++) {
    if (candles[i] > max) {
      max = candles[i];
    }
  }

  for (let i = 0; i < candles.length; i++) {
    if (candles[i] === max) {
      count++;
    }
  }

  return count;
}

let theCandles = [4,4,3,2];
console.log(birthdayCandles(theCandles));   // expected output 2

let theCandles2 = [1, 6, 3, 10];
console.log(birthdayCandles(theCandles2));   // expected output 1

let theCandles3 = [11, 11, 11, 10];
console.log(birthdayCandles(theCandles3));   // expected output 3

/*
HackerRank - Diagonal Difference

Given a square matrix, calculate the absolute difference between the sums of its diagonals. 

Example [[]]:
1 2 3
4 5 6
9 8 9  
The left-to-right diagonal = 1+5+9=15. The right to left diagonal = 3+5+9=17
Their absolute difference is |15-17| =2;

*/

function diagonalDifference(arr) {
  let sum1 = 0;
  let sum2 = 0; 

  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][arr.length-i-1];  //3-0-1=2, 3-1-1=1, 3-2-1=0
  }
  let result = Math.abs(sum1 -sum2);
  console.log(result);
}

let myArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 11],
]
diagonalDifference(myArr);  // output: 2

//primary diagonal sum: 1+5+11=17
//secondary diagonal sum: 3+5+7=15 
// 17 - 15 = 2

let myArr2 = [
  [1, 2, 3],
  [4, 9, 6],
  [7, 8, 20],
]
// primary diagonal sum: 1+9+20 = 30
// secondary diagonal sum: 3+9+7 = 19
// 30 - 19 = 11

diagonalDifference(myArr2);  // output: 11
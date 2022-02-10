/*
CodeWars Pig Latin exercise

Move the first letter of each word to the end of it, then add "ay" to the end of the word. 
Leave punctuation marks untouched. 
NOTE: there's always a space between the word and punctuation in this exercise

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/

function pigIt(str){
  let array = str.split(" ");
  let newArr = [];
  const punctuations = [':',',',';', '.', '!', '?'];
  
  for (let i = 0; i < array.length; i++) {
    let hasPunctuation = false;
    
    for (let j = 0; j < punctuations.length; j++) {
      if (array[i].includes(punctuations[j])) {
        hasPunctuation = true;
      }
    }

    if(!hasPunctuation) {
      let letter = array[i].substring(0, 1);
      let newStr = array[i].substring(1) + letter + 'ay';
      newArr.push(newStr);
      
    } else {
      newArr.push(array[i]);
    }
  }
  
  return newArr.join(" ")
}

console.log(pigIt('Hello world !'));        //elloHay orldway !
console.log(pigIt('Pig Latin is cool'));    //igPay atinLay siay oolcay
console.log(pigIt('Quis custodiet ipsos custodes ?'));    //uisQay ustodietcay psosiay ustodescay ?


///////////////// OTHER SOLUTION ///////////////////

function pigLatin(str){

  let words = str.split(' ');
  let newString = []

  //loop through an array of words
  for (let i = 0; i < words.length; i++) {
    if(!words[i].match(/^[.,:!?]/)) {
      let ay = 'ay';
      let oneWord = words[i].concat(words[i][0]).slice(1).concat(ay)
      newString.push(oneWord);
    } else {
      let oneWord = words[i]  //Pig latin is cool
      newString.push(oneWord);
    }
  }
  return newString.join(' ');
}

console.log(pigLatin('hello !'));   //ellohay !
console.log(pigLatin('melon ! belon poop'));   //elonmay ! elonbay ooppay

// Make a function that will return any given
// string into all caps followed by the same string all lowercase.

function lowerUpper(string) {
let first = string.toUpperCase();
let second = string.toLowerCase();
return first.concat(second);
}

let lowerUpperResult = lowerUpper('mountains');
console.log('half upper half lower --> ' +lowerUpperResult);

// Make a function that returns a number half the length, and 
// rounded down. You'll need to use Math.floor().


function halfNums(num) {
  return Math.floor(num/2);
}

let halfNumsResult = halfNums(9);
console.log('half number --> ' + halfNumsResult);

// Make a function that uses slice() and the other
// functions you've written to return the first half of the string

function returnsFirstHalf(string) {
  return string.slice(0, Math.round(string.length / 2));
}

let returnsFirstHalfResult = returnsFirstHalf('writingoutastring');
console.log('first half of word --> ' + returnsFirstHalfResult);

// Make a function that takes a string and returns that string where the 
// first half is capitalized, and the second half is lower cased. 
// (If the string length is odd, capitalize the shorter of the first half.)

function returnsCapSlashLower(string) {
  let halfString = Math.floor(string.length / 2);
  let firstHalf = string.slice(0, halfString);
  let secondHalf = string.slice(halfString, string.length);
  return firstHalf.toUpperCase().concat(secondHalf.toLowerCase());
}

returnsCapSlashLowerResult = returnsCapSlashLower('practicestring');
console.log('first half uppercase second lower --> ' + returnsCapSlashLowerResult);


// Make a function that takes any string and capitalizes
// any character that follows a space.

function capsEveryWord(string) {
  let splitString = string.split('');
  for (let i = 0; i < splitString.length; i ++) {
    if (i === 0) {
      splitString[i] = splitString[i].toUpperCase();
    } else if (splitString[i] === " ") {
      splitString[i + 1] = splitString[i + 1].toUpperCase();
    }
  }
  let joinedString = splitString.join("");
  return joinedString;
}

let capsEveryWordResult = capsEveryWord('this is a capitalized string');
console.log('capitalized words --> ' + capsEveryWordResult);

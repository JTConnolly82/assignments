
// add two nums

function addNums(a, b) {
  return a + b;
}

let addNumsAnswer = addNums(2, 5);
console.log('adding 3 numbers: ' + addNumsAnswer);

// take 3 nums and returns largest

function whichIsBiggest(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

let bigNum = whichIsBiggest(3, 5, 8);
console.log('biggest number: ' + bigNum);


function evenOrOdd(a) {
  if (a % 2 === 0) {
    return 'even number';
  } else {
    return 'its odd';
  }
}

let evenOddThing = evenOrOdd(5);
console.log("even or odd? " + evenOddThing);

// Write a function that accepts a string as a parameter. If the length of the string 
// is less than or equal to twenty characters long, return the string concatenated with 
// itself (string + string). If the 
// string is more than twenty characters long, return the first half of the string.

function string20(string) {
  let halfString = '';
  if (string.length <= 20) {
    return string + string;
  } else if (string.length > 20) {
    for (let i = 0; i < string.length/2; i++) {
      halfString += string[i];
    }
    return halfString;
  }
}

function standardizeLength(str) {
  if string20.length <= 20 {
    rturn str + str;
  } else {
    str.slice()
  }
}

let twentyString = string20('thisisalongandverycoolstringfortesting');
console.log(twentyString);





// Write a function that accepts a number ‘n’ as a parameter. 
// Then print the first ‘n’ Fibonacci numbers and return their sum.
// The first numbers are:
// (0) 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
// So if n were 6, the sum of 1+1+2+3+5+8 would be 20
// The next number is found by adding up the two numbers before it.
// let starterArr = [0, 1, 2, 3, 4, 5, 6];
//                  [1, 1, 2, 3, 5, 8, 13]

function fibFunc(n) {
  let fibArr = [];
  let starterArr = [];
  for (let i = 0; i < n; i++) {
    starterArr.push(i);
  }
  for (let j = 0; j < starterArr.length; j++) {
    fibArr.push(starterArr[j]);
  }
  return fibArr;
}

let fibonacci = fibFunc(8);
console.log('fibonacci: ' + fibonacci);


// Write a function that accepts a string as a parameter. Return the most 
// frequently occurring letter in that string. ( White spaces count as a letter )

function mostChars(string) {
  // use string.split() here ????????
  for (let i = 0; i < string.length; i++) {
    
  }
}

let frequentChars = mostChars('randomstringhere');
console.log(frequentChars);
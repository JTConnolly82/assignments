

function capAndLower(string) {
  return string.toUpperCase().concat(string.toLowerCase());
}

let changedString = capAndLower('moose');
console.log(changedString);


function findMiddleIndex(string) {
  return Math.floor(string.length/2);
}

let midDex = findMiddleIndex('its friday i want to ride my bike');
console.log('middle index: ' + midDex);


function halfString(string) {
  return string.slice(0, string.length/2);
}

let firstHalf = halfString('this is an example of a string');
console.log(firstHalf);


function capsAndLows(string) {
  let firstHalf = string.slice(0, string.length/2);
  let secondHalf = string.slice(string.length/2);
  return firstHalf.toUpperCase().concat(secondHalf.toLowerCase());
}

let capLow = capsAndLows('thisisacoollongstringforpractice');
console.log('first half upper second half lower: ' + capLow);


// capitalize("hey friends! practice practice practice!") 
// -> "Hey Friends! Practice Practice Practice!"

function capitalizeTheFirst(string) {
  let capArr = string.split(' ');
  console.log(capArr)
  for (i = 0; i < capArr.length; i++) {
    // stuff here
  };
  // return the things
  return 'the answer!'
}

let cappyString = capitalizeTheFirst('this is a string for practicing');
console.log("this should be capitalized: " + cappyString);



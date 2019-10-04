// preliminaries

console.log('count up');
for (let i = 0; i < 10; i++) {
  console.log(i);
}


console.log('count down');
for (let i = 9; i > 0; i--) {
  console.log(i);
}

console.log('print fruits')
var fruit = ["banana", "orange", "apple", "kiwi"]
for (let i = 0; i < fruit.length; i++) {
  console.log(fruit[i]);
}

// bronze

let newArr = [];

for (let i = 0; i < 10; i++) {
  newArr.push(i);
}
console.log('pushing array');
console.log(newArr);


// Write a for loop that prints to the console only even numbers 0 through 100.

for (let i = 0; i < 101; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Write a for loop that will push every other fruit to an array.
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

for (let i = 0; i < fruit.length; i++) {
  if (i % 2 != 0) {
    console.log(fruit[i]);
  }
}

let newFruits = [];
for (let i = 0; i < fruit.length; i++) {
  if (i % 2 != 0) {
    newFruits.push(fruit[i]);
  }
}
console.log('newFruits: ' + newFruits);


//Silver
var peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
]

for (let i = 0; i < peopleArray.length; i++) {
  console.log(peopleArray[i].name);
}


let names = [];
let occupations = [];
for (let i = 0; i < peopleArray.length; i++) {
  names.push(peopleArray[i].name);
  occupations.push(peopleArray[i].occupation);
}
console.log(names);
console.log(occupations);

let oddNames = [];
let evenJobs = [];

for (let i = 0; i < peopleArray.length; i++) {
  if (i % 2 === 0) {
    oddNames.push(peopleArray[i].name);
  } else if (i % 2 != 0) {
    evenJobs.push(peopleArray[i].occupation);
  }
}

console.log('oddNames: ' + oddNames);
console.log('evenJobs: ' + evenJobs);


// Gold

let zeroMatrixArr = [];

for (let i = 0; i < 3; i++) {
  zeroMatrixArr.push([]);
  for (let j = 0; j < 3; j++) {
   zeroMatrixArr[i].push(0);
  }
}

console.log(zeroMatrixArr);

let numsMatrixArr = [];

for (let i = 0; i < 3; i++) {
  numsMatrixArr.push([]);
  for (let j = 0; j < 3; j++) {
   numsMatrixArr[i].push(i);
  }
}

console.log(numsMatrixArr);


let matrixArr = [];

for (let i = 0; i < 3; i++) {
  matrixArr.push([]);
  for (let j = 0; j < 3; j++) {
   matrixArr[i].push(j);
  }
}

console.log(matrixArr);


let xMatrixArr = 
[[0, 1, 2], 
[0, 1, 2], 
[0, 1, 2]]
;

for (let i = 0; i < xMatrixArr.length; i++) {
  for (let j = 0; j < xMatrixArr[i].length; j++) {
   xMatrixArr[i][j] = 'x';
  }
}

console.log(xMatrixArr);

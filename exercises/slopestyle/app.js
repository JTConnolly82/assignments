// Use the Rest Operator to help this function return an array of animals, 
// no matter how many animals are passed to it:

function collectAnimals(...args) {
  return args;
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));


function lotsOfArgs () {
  return arguments;
};

console.log(lotsOfArgs('hi', 'hello', 'argument', 'tree'));


// Write a function that returns a food object with the
// array names as properties using Object Literals:


function combineFruit(fruit, sweets, vegetables){
  return {fruit: fruit, sweets: sweets, vegetables: vegetables};
}

console.log(combineFruit(["apple", "pear"],
           ["cake", "pie", "candy", "icecream"],
           ["carrot"]));


const vacation = {  
  location: "Burly Idaho",
  duration: "3 weeks"
};

const {location, duration} = vacation;
          
function parseSentence(place){
  return `We're going to have a good time in ${location} for ${duration}`
}

console.log(parseSentence(vacation));

const theThings = ['things', 'stuff', 'something'];

function returnFirst(items){
  const [ firstItem ] = items; /*change this line to be es6*/
  return firstItem;
};

console.log(returnFirst(theThings));


const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    const [firstFav, secondFav, thirdFav] = favoriteActivities;
    return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav;
}

console.log(returnFavorites(favoriteActivities));

// Use the Rest and Spread Operator to help take any number of arrays, 
// and return one array. You will need to change how the arrays are passed in. 
// You may write it assuming you will always receive three arrays if you would like to.

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];


function combineAnimals(...args) {
  let newArr = [];
  for (let i = 0; i < args.length; i++) {
    newArr.push(...args[i]);
  }
  return newArr;  
}


console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));


// change to make more es6 syntax
function product(a, b, c, d, e) {  
  var numbers = [a,b,c,d,e];

  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}


// change to use more es6 syntax
function unshift(array, a, b, c, d, e) {  
  return [a, b, c, d, e].concat(array);
}
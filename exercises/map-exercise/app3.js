// 1) Make an array of numbers that are doubles of the first array

let arr = [1, 2, 44, 21, 12]
let doublednums = arr.map((num)=> {
  return num * 2;
})
console.log(doublednums);
// 2) Take an array of nums and make them strings
let stringedArr = arr.map((num) => {
  return num.toString();
})
console.log(stringedArr);
// 3) Capitalize each of an array of names
let names = ['stan', 'dan', 'pan', 'sven'];
let cappedNames = names.map((name)=>{
  name.charAt(0).toUpperCase() + name.substr(1);
})
console.log(cappedNames);


// 4) Make an array of strings of the names
let celebs = [
  {
      name: "Angelina Jolie",
      age: 80
  },
  {
      name: "Eric Jones",
      age: 2
  },
  {
      name: "Paris Hilton",
      age: 5
  },
  {
      name: "Kayne West",
      age: 16
  },
  {
      name: "Bob Ziroll",
      age: 100
  }
]

let arrayOfStringsOfNames = celebs.map((celeb)=>{
  return celeb.name;
})
console.log(arrayOfStringsOfNames);

// 5) Make an array of strings of the names saying 
//    whether or not they can go to The Matrix. (over 18)

let allowedToTheMatrix = celebs.map((celeb)=>{
  if (celeb.age >= 18) {
    return celeb.name + ' is allowed in';
  } else {
    return celeb.name + ' how dare you!'
  }
})
console.log(allowedToTheMatrix);

// 6) Make an array of the names in h1s, and the ages in h2s

let namesHOnesAgeHTwos = celebs.map((celeb)=>{
  return '<h1>'+celeb.name+'</h1>' + ' ' + '<h2>'+celeb.age+'</h2>';
})

console.log(namesHOnesAgeHTwos);
// 1) Given an array of numbers, return a new array that 
// has only the numbers that are 5 or greater.

let nums = [1, 2, 22, 5, 6];

let overFive = nums.filter((num)=>{
  if (num >= 5) {
    return num
  }
});
console.log(overFive);

// 2) Given an array of numbers, return a 
// new array that only includes the even numbers.

let evenStevens = nums.filter((num)=>{
  if (num % 2 === 0) {
    return num;
  }
});
console.log(evenStevens);

// 3) Given an array of strings, return a new array that only includes 
// those that are 5 characters or fewer in length

let stringsArr = ['string', 'hereisalongone', 'longfoshobro', 'fling', 'ming', 'sing', 'ring'];
let fiveOrLess = stringsArr.filter((string)=>{
  if(string.length <= 5){
    return string;
  }
});
console.log(fiveOrLess);

// 4) Given an array of people objects, return a new array that has 
// filtered out all those who don't belong to the club.

let celebs = [
  { name: "Angelina Jolie", member: true },
  { name: "Eric Jones", member: false },
  { name: "Paris Hilton", member: true },
  { name: "Kayne West", member: false },
  { name: "Bob Ziroll", member: true }
];

let allowedInside = celebs.filter((cel)=>{
  if (cel.member === true) {
    return cel
  }
})
console.log(allowedInside);


let peeps = [{ name: "Angelina Jolie", age: 80 },
{ name: "Eric Jones", age: 2 },
{ name: "Paris Hilton", age: 5 },
{ name: "Kayne West", age: 16 },
{ name: "Bob Ziroll", age: 100 }];

let allowedMatrix = peeps.filter((person)=>{
  if (person.age >= 18) {
    return person;
  }
})
console.log(allowedMatrix);
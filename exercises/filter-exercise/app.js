let arr = [1, 2, 66, 44, 22, 7, 2, 1];

let overFive = arr.filter((num) => {
  if (num >= 5) {
    return num;
  }
});


console.log('nums over 5 -->  ' + overFive);

let evens = arr.filter((num) => {
  if (num % 2  === 0) {
    return num;
  }
});

console.log('even numbers --> ' + evens);

let strings = ["dog", "wolf", "by", "family", "eaten", "camping"];

let shortbois = strings.filter((string) => {
  if (string.length <= 5) {
    return string;
  }
})

console.log('<= 5 ' + shortbois);

const celoobrities = [
  { name: "Angelina Jolie", member: true, age: 19 },
  { name: "Eric Jones", member: false, age: 11 },
  { name: "Paris Hilton", member: true, age: 24 },
  { name: "Kayne West", member: false, age: 11 },
  { name: "Bob Ziroll", member: true, age: 22 }
];

let cells = celoobrities.filter((celeb) => {
  if (celeb.member === false) {
    console.log(celeb.name);
    return celeb.name;
  }
});

console.log(cells);  


let allowedMatrix = celoobrities.filter((celeb) => {
  if (celeb.age >= 18) {
    return celeb.name
  }
})
console.log(allowedMatrix);




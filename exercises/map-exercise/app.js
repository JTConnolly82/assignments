const arr = [1, 2, 3, 4, 5];

let doubled = arr.map((num) => num*2);
console.log('doubled ' + doubled);

let stringed = arr.map((num) => num.toString());
console.log('string: ' + stringed);

const names = ['bill', 'will', 'billiam', 'william'];

let capitalized = names.map((name) => {
 return name[0].toUpperCase() + name.substr(1); 
});
console.log('capitalized ' + capitalized);

const celebrities = [
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
];

let celebNames = celebrities.map((celeb) => celeb.name);
console.log(celebNames);

let allowedIn = celebrities.map((celeb) => {
  if (celeb.age > 50) {
    return `${celeb.name} is allowed inside!`;
  } else if (celeb.age < 50) {
    return `${celeb.name} is not allowed in there`;
  }
});

console.log(allowedIn);

let elements = celebrities.map((celeb) => {
  return `<h1>${celeb.name}</h1> <h2>${celeb.age}</h2>`;
})
console.log(elements);




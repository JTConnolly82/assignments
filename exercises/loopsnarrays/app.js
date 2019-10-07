var peopleWhoWantToSeeMadMaxFuryRoad = [
  {
    name: "Mike",
    age: 12,
    gender: "male"
  },{
    name: "Madeline",
    age: 80,
    gender: "female"
  },{
    name: "Cheryl",
    age: 22,
    gender: "female"
  },{
    name: "Sam",
    age: 30,
    gender: "male"
  },{
    name: "Suzy",
    age: 4,
    gender: "female"
  }
]

for (let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
  if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
      console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + ' is not old enough dont let HIM in');
    } else {
      console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + ' is too young, stop HER from getting in');
    }
  } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
      console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + ' is old enough, HEs going to love this movie');
    } else {
      console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + ' is allowed in, SHE loves movies');
    }
  }
}

arr = [2, 5, 435, 4, 3];
let counter = 0;
for (let i = 0; i < arr.length; i++) {
  counter = counter + arr[i];
}
console.log('counter: ' + counter);
if (counter % 2 === 0) {
  console.log('light is off');
} else {
  console.log('light is ON');
}
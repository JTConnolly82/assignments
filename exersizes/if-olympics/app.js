// Preliminaries


if (5 > 3) {
  console.log('greater than');
}




if ("cat".length === 3) {
  console.log('is the length');
}


if ('cat' === 'dog') {
  console.log('cats are equal to dogs');
} else {
  console.log('not the same');
}


// Bronze

var person = {
  name: "Bobby",
  age: 12
}

if (person.age >= 18) {
  console.log(person.name + ' is allowed to go to the move');
} else {
  console.log(person.name + ', you are not old enough');
}

if (person.name[0] === 'B') {
  console.log('welcome in!');
}

if (person.name[0] === 'B' && person.age >= 18) {
  console.log('take a seat, Bobby');
} else {
  console.log('right name wrong age Bobby');
}


// Silver

if (1 === "1") {
  console.log('strict');
} else if (1 == "1") {
  console.log('loose');
} else {
  console.log('not equal at all');
}

if (1 <= 2 && 2 === 4) {
  console.log('yes');
}

// Gold

if (typeof 'dog' === 'string') {
  console.log('dog is a word');
}

if (typeof true === 'boolean') {
  console.log('boolean!');
}



if (typeof n === 'undefined') {
  console.log('its undefined')
} else {
  console.log('it is defined');
}



if ('s' > 12) {
  console.log('this is weird');
}

var myNum = 10;

myNum % 2 === 0 ? console.log('its even') : console.log('odd number');




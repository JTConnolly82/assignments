

let chars = 'abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*'

function randomPasswordGenerator(number) {
  let newArr = [];
  for (let i = 0; i < number; i++) {
    let randSelect = Math.floor(Math.random() * chars.length);
    newArr.push(chars[randSelect]);
  }
  return newArr;
}
console.log(randomPasswordGenerator(9));
//Returns a password with the length of 5
//Example: s*3Lj
const readline = require("readline-sync");



//get first number
let firstNum = readline.question('first number:  ')

firstNum = Number(firstNum);

//get the operator
const operators = ['addition', 'subtraction', 'multiplication', 'division'];

let operation = readline.keyInSelect(operators, 'What operation do you want to perform');
//get the second number
let secondNum = readline.question('second number:  ')

secondNum = Number(secondNum);

// return the result
if (operators[operation] === 'addition') {
  let addAnswer = firstNum + secondNum;
  console.log('addition answer: ' + addAnswer);
} else if (operators[operation] === 'subtraction') {
  let subtractAnswer = firstNum - secondNum;
  console.log('subtraction answer: ' + subtractAnswer);
} else if (operators[operation] === 'multiplication') {
  let multAnswer = firstNum * secondNum;
  console.log(multAnswer);
} else if (operators[operation] === 'division') {
  let divAnswer = firstNum / secondNum;
  console.log(divAnswer);
}
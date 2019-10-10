const readline = require("readline-sync");

let options = ['put hand in hole', 'find the key', 'open the door'];

// They can't open the door unless they find the key first.
// They die if they put their hand in the hole.


let hasKey = false;
let alive = true;
let inRoom = true;

while (inRoom === true && alive === true){
  let choice = readline.keyInSelect(options, 'make your choice... ');
  if (options[choice] === 'put hand in hole') {
    console.log('you died!');
    console.log('game over...');
    alive = false;
  } else if (options[choice] === 'find the key') {
    console.log('you found a key!');
    hasKey = true;
  } else if (options[choice] === 'open the door' && hasKey === true) {
    console.log('right this way....');
    console.log('you win!')
  }
}








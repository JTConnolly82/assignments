const ask = require('readline-sync');

const enemies = [
  {
    name: "",
    items: [],
    hp: 100,
    fightingWords: []

  },
  {
    name: "",
    items: [],
    hp: 100,
    fightingWords: []

  },
  {
    name: "",
    items: [],
    hp: 100,
    fightingWords: [],
    alive: true
  }
];

const player = {
    name: userName,
    items: [],
    hp: 100,
    fightingWords: [],
    alive: true
};




const moveOptions = ["Walk" + " " + "(w)", "Exit" + " " + "(e)"];

const enemyAppearsOptions = ["Attack" + " " + "(a)", "Run" + " " + "(r)"];

let moveOptionsIndex = ask.keyInSelect(moveOptions, "Keep Walking?");

while (player.alive) {
  console.log(`
   "Skiing!
  /\         /\     \   O \
 / \\  /\   /\\\     \_/|\_\
/   \\/ \\ /  \\\       \\
     /   \/    \\\     \/'
    /    /      \\\     \\_
   /    /        \\\     
`);
  if (!name) {

    const userName = ask.question('What is your name? ');
    console.log('Ok ' + player.name + ", let's get started.");
  }



}
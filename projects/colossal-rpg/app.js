const ask = require('readline-sync');

// If the user enters 'Print' in the console, the console will print the players 
// name, HP, and each item in their inventory

let alive = true;
let winner = false;
function Obstacle (name, health){
    this.name = name;
    this.health = health;
};

const jump = new Obstacle('jump line', 100);
const chute = new Obstacle('chute', 100);
const cliff = new Obstacle('cliff area', 100);
const obstacles = [jump, chute, cliff];

console.log(' ');
console.log('⛷ 🏔  Skiing!  🏔 ⛷');
console.log(' ')
console.log('〰〰〰〰〰〰〰〰〰〰〰〰〰〰');
console.log(' ');
console.log('🌨 ⛰⛰ 🌨     🚗💨            🏠🌳');
console.log(' ');
console.log('🖥 👴   Good morning! Just need some info for your ticket.');
const userName = ask.question('What is your name? ');


const player = {
  name: userName,
  items: [],
  health: 100,
  happiness: 0
};


console.log("Great that'll be $100 dollars");
let tickChoice = ask.keyIn('(p) Pay for ticket, (c) complain about price, or (l) leave', {limit: 'pcl'} );
if (tickChoice === 'p') {
  console.log(`Thanks ${player.name}, looks like there's good conditions out there today, enjoy!`);
  console.log(`❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄`);
  console.log(` ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄`);
  console.log(`❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄`);
} else if (tickChoice === 'c') {
  console.log(`sorry ${player.name}, i don't make the rules`);
  let tickChoice = ask.keyIn('(p) Pay for ticket or (l) leave', {limit: 'pl'} );  
  if (tickChoice === 'p') {
    console.log(`Thanks ${player.name}, looks like there's good conditions out there today, enjoy!`);
    console.log(`❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄`);
    console.log(` ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄`);
    console.log(`❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄ ❄`);
  }
} else if (tickChoice === 'l') {
  console.log(`Alright ${player.name} see you soon`);
  alive = false;
}



while(alive && !winner){
    let choice = ask.keyIn('Would you like to (l) Take the Lift, (i) Check Backpack, or (q) Leave Game? ' )
    if(choice === 'l') {
        rideLift();
    } else if (choice === 'i') {
       printInventory();
    } else if (choice === 'q') {
        alive = false;
        console.log('You quit the game');
    }
};




function rideLift (){
  console.log('⬆');
  console.log('🆙')
  console.log('🚠');
  console.log(' ');
  let random = Math.floor(Math.random()*4)
  if(random === 3){
      console.log('⬇');
      console.log(' ');
      console.log('⛷');
      console.log(' ');
      encounterObstacle()
  }else{
    console.log(' ');
    console.log(' 🌲  🌲');
    console.log(' ');
    console.log('⛷ 💨');
    console.log(' ');
    console.log(' ');
    console.log('  🌲 ⛄  🌲');
    console.log('Good run! You made it to the bottom.');
  }
}


function printInventory() {
  console.log(`Checking backpack...`)
  for (let i = 0; i < player.items.length; i++) {
    if (player.items.length > 0) {
      console.log(player.items[i]);
    } else {
      console.log(`It's empty!`);
    }
  }
}

function selectObstacle(){
  let random = Math.floor(Math.random()*obstacles.length);
  return obstacles[random];
};

function encounterObstacle(){
    let currentObstacle = selectObstacle();
    let choice = ask.keyIn(`🔴  You encountered ${currentObstacle.name}! Would you like to [s] ski it, [a] go around, or [c] Call ski patrol`, {limit: 'sac'})
    if(choice === 's'){
        skiTerrainFeature(currentObstacle);
    }else if (choice === 'a'){
        goAround(currentObstacle);
    }else {
        isAlive = false
        console.log('Taken down by ski patrol! 👌');
        console.log('Game over.')
    }
}



function skiTerrainFeature(currentObstacle) {
// If attacking, you will choose a random attack power between a min and max
// After the player attacks or runs the enemy attacks back for a random damage amount
// If the player kills the enemy you can give the Player some HP and a 
// special item that is stored in the inventory
// If the enemy kills the player the console prints an 
// cool death message and the game ends
if (currentObstacle.name === 'jump line') {
  console.log('Run Recap:');
  while (player.health > 0 && currentObstacle.health > 0) {
    let obstacleRandom = Math.floor(Math.random()*3);
    let playerRandom = Math.floor(Math.random()*3);
    if (obstacleRandom >= playerRandom) {
      const jumpAttacks = [`didn't clear the jump`,  `landed on your back`, `landed on someone`];
      let obstacleAction = jumpAttacks[obstacleRandom];
      player.health -= Math.round(Math.random()*20);
      console.log('🏔  ' + obstacleAction);
      console.log(player.name + ' health:  ' + player.health)
    } else if (obstacleRandom < playerRandom) {
      const playerAttacks = ['cleared the jump', `almost overshot`, `landed it`];
      let playerAction = playerAttacks[playerRandom];
      console.log('⛷  ' + playerAction);
      currentObstacle.health -= Math.round(Math.random()*70);
      console.log(currentObstacle.name + ' health: ' + currentObstacle.health);
    }
    if (currentObstacle.health <= 0) {
      console.log('You made it!  👍');
      console.log('Your health ->  ' + player.health)
      player.items.push('Go-Pro');
      console.log('Check what you won!');
      player.happiness += 1;
      player.health += 10;
      if (player.happiness === 3) {
        console.log('You won the trophy! 🏆');
        player.items.push('🏆');
      }
    } else if (player.health <= 0) {
      console.log('YOU DIED!!');
      console.log('☠ ☠ ☠ ☠ ☠ ');
      alive = !alive;
    }
  }
  currentObstacle.health = 100;

} else if (currentObstacle.name === 'chute') {
  console.log('Run recap:')
  while (player.health > 0 && currentObstacle.health > 0) {
    let obstacleRandom = Math.floor(Math.random()*3);
    let playerRandom = Math.floor(Math.random()*3);
    if (obstacleRandom >= playerRandom) {
      const chuteAttacks = [`lost a ski`,  `got stuck in a snow drift`, `faceplanted`];
      let obstacleAction = chuteAttacks[obstacleRandom];
      console.log(obstacleAction);
      player.health -= Math.round(Math.random()*20)
      console.log(player.name + ' health: ' + player.health);
    } else if (obstacleRandom < playerRandom) {
    const playerAttacks = ['got a powder turn', 'hit a jump', 'made a turn'];
    let playerAction = playerAttacks[playerRandom];
    console.log(playerAction);
    currentObstacle.health -= Math.round(Math.random()*70);
    console.log(currentObstacle.name + ' health: ' + currentObstacle.health);
    }
    if (currentObstacle.health <= 0) {
      console.log('You made it!  🤘');
      console.log('Your health ->  ' + player.health);
      player.items.push('cliff bar');
      console.log('Check what you won!');
      player.happiness += 1;
      player.health += 10;
      if (player.happiness === 3) {
        console.log('You won the trophy! 🏆');
        player.items.push('🏆');
      }
    } else if (player.health <= 0) {
      console.log('YOU DIED!!');
      console.log('☠ ☠ ☠ ☠ ☠ ');
      alive = !alive;
    }
}
currentObstacle.health = 100;
}
          else if (currentObstacle.name === 'cliff area') {
            console.log('Run Recap:'); 
            while (player.health > 0 && currentObstacle.health > 0) {
              let obstacleRandom = Math.floor(Math.random()*3);
              let playerRandom = Math.floor(Math.random()*3);
              if (obstacleRandom >= playerRandom) {
                const cliffAttacks = [`hit a rock`,  `fell on your side`, `scorpioned`];
                let obstacleAction = cliffAttacks[obstacleRandom];
                console.log(obstacleAction);
                player.health -= Math.round(Math.random()*20)
                console.log(player.name + ' health ->  ' + player.health);
              } else if (obstacleRandom < playerRandom) {
                const playerAttacks = ['landed it', 'did a 360', 'sent it']
                let playerAction = playerAttacks[playerRandom];
                console.log(playerAction);
                currentObstacle.health -= Math.round(Math.random()*70);
        console.log(currentObstacle.name + ' health: ' + currentObstacle.health);
              }
              if (currentObstacle.health <= 0) {
                console.log('You made it!  🙌');
                console.log('Your health ' + player.health + ' ' + player.emoji)
                player.items.push('Burrito');
                console.log('Check what you won!');
                player.happiness += 1;
                player.health += 10;
                if (player.happiness === 3) {
                console.log('You won the trophy! 🏆');
                player.items.push('🏆');
      }
              } else if (player.health <= 0) {
                console.log('YOU DIED!!');
                console.log('☠ ☠ ☠ ☠ ☠ ');
                alive = !alive;
              }
          }
        currentObstacle.health = 100;
    }
            
};

function goAround(currentObstacle) {
  let leaveResult = Math.round(Math.random() * 2);
  if (leaveResult === 1) {
    console.log('You made it safely around the feature and to the bottom of the run.');
  } else if (leaveResult === 2 || leaveResult === 0) {
    let aroundObstacles = ['crossed your tips and faceplanted', 'got stuck in some powder', 'were tangeled in a tree'];
    let aroundRand = Math.floor(Math.random() * aroundObstacles.length);
    player.health -= 5;
    console.log(' ');
    console.log('You ' + aroundObstacles[aroundRand]);
    console.log('You took some minor damage, health: ' + player.health);
    console.log(`You won't be able to turn around, you have to go down!`);
    console.log(' ');
    currentObstacle = currentObstacle;
    skiTerrainFeature(currentObstacle);
  }
};



  


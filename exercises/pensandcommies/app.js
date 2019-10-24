// Flip a coin (random number between 1 and 2) to see which party attacks first
// This will just be a randomly generated number 


class Penguins {
  constructor(party) {
    this.party = {
      population: 1000000,
      name: "penguins"
    }
  }
  sendNuke(party) {
    console.log('the penguins shot a nuke!')
    let chanceOfHit = Math.floor(Math.random() * 10);
    if (chanceOfHit > 7) {
      (function onHit(communists) {
        console.log('the communists were hit!');
        let popNum = Math.floor(Math.random() * 200000);
        communists.party.population = communists.party.population - popNum;
        console.log('population: ' + party.population);
      })();
    } else {
      (function onMiss(party) {
        console.log('the penguins missed!');
    
      })();
    }
  }
}

class Communists {
  constructor(party) {
    this.party = {
      population: 1000000,
      name: "communists"
    }
  }
  sendNuke(party, onHit, onMiss) {
    console.log('the communists shot a nuke!');
    let chanceOfHit = Math.floor(Math.random() * 10);
    if (chanceOfHit > 7) {
      (function onHit(penguins) {
        console.log('the penguins were hit!');
        let popNum = Math.floor(Math.random() * 200000);
        penguins.party.population = penguins.party.population - popNum;
        console.log('population: ' + party.population);
      })();
    } else {
      (function onMiss(party) {
        console.log('the communists missed the penguins');
      })();
    }
  }
}

function startTheWar() {
  let communists = new Communists();
  let penguins = new Penguins();
  let random = Math.floor(Math.random() * 2);
  if (random === 0) {
    communists.sendNuke(penguins);
  } else if (random === 1) {
    penguins.sendNuke(communists);
  }
}

startTheWar();
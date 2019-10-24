// Statuses go from "Powered Up" to "Big" to "Small" to "Dead"

class Player {
  constructor(name, totalCoins = 0, statusCount = 2, hasStar = false, gameActive = true) {
    this.stars = [];
    this.name = name;
    this.totalCoins = totalCoins;
    this.statusCount = statusCount;
    this.statuses = ["Powered Up", "Big", "Small", "Dead"];
    this.status = this.statuses[statusCount]
    this.hasStar = hasStar;
    this.gameActive = gameActive;
  }
    setName(namePicked) {
      name = namePicked;
    }
    gotHit(statusCount) {
      if (statusCount === 3) {
        this.gameActive = false;
      }
      this.status = statuses[statusCount + 1];
    }
    gotPowerup(statusCount) {
      if (this.stars == 0) {
        this.hasStar = true;
      }
      if (statusCount === 0) {
        this.stars.push('⭐');
      } else {
        this.status = this.statuses[statusCount - 1];
      } 
    }
    addCoin(totalCoins) {
      totalCoins = totalCoins++;
    }
    print() {
      console.log('Name: ' + this.name);
      console.log('Status: ' + this.status);
      console.log('Stars:  ' + this.stars);
    }
}

function randomMove (player) {
  let random = Math.floor(Math.random() * 3);
  let moves = [player.gotHit, player.gotPowerup, player.addCoin];
  moves[random]();
  player.print();
}

let john = new Player('john');
while (john.gameActive === true) {
  setInterval(randomMove(john), 3000);
}
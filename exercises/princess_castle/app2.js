

class Player {
  constructor(name, totalCoins = 0, hasStar = 0, gameActive = true) {
    this.stars = [];
    this.name = name;
    this.totalCoins = totalCoins;
    this.statusCount = 2;
    this.status = 'Small';
    this.statusOptions = ["Powered Up", "Big", "Small", "Dead"];
    this.hasStar = hasStar;
    this.gameActive = gameActive;
  }
    setName(namePicked) {
      name = namePicked;
    }
    gotHit() {
      console.log('✨ gotHit ');
      if (this.statusCount === 0) {
        this.hasStar = false;
      }
      this.statusCount++;
      if (this.statusCount === 3) {
        this.gameActive = false;
      }
      this.status = this.statusOptions[this.statusCount]
    }
    gotPowerup() {
      console.log('✨ gotPowerup ');
      if (this.stars == 0 && this.statusCount === 0) {
        this.hasStar = true;
      }
      if (this.statusCount === 0 ) {
        this.stars.push("⭐");
      } else if (this.statusCount > 0) {
        this.statusCount--;
        this.status = this.statusOptions[this.statusCount];
      }
    }
    addCoin() {
      console.log('✨ addCoins ');
      this.totalCoins++;
    }
    print() {
      // console.log(this.statusOptions[this.statusCount])
      // console.log(this.statusCount)
      console.log('Name: ' + this.name);
      console.log('Status: ' + this.status);
      console.log('Coins: ' + this.totalCoins);
      console.log('Stars:  ' + this.stars + '\n');
    }
}

let randomMove = function (player) {
  let random = Math.floor(Math.random() * 3);
  if(random === 0){
    player.gotHit()
  }else if(random === 1){
    player.gotPowerup()
  } else if (random === 2) { 
    player.addCoin()
  }
  player.print();
  if(!player.gameActive){
    clearInterval(myGame)
  }
}

let john = new Player('john');
// console.log(john)
// john.print()
let myGame = setInterval(() => {
    randomMove(john)
  }, 1000)
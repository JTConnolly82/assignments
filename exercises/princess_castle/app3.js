class Sport {
  constructor(name, usesBall, season, hasTeam, fieldType, starter) {
    this.name = name;
    this.usesBall = usesBall;
    this.season = season;
    this.hasTeam = hasTeam;
    this.fieldType = fieldType;
    this.starter = starter;
  }
  startGame() {
    console.log(this.name + ' ' + 'starts with --> ' + this.starter);
  };
  print() {
    console.log('name: ' + this.name);
    console.log('usesBall: ' + this.usesBall);
    console.log('season: ' + this.season);
    console.log('has team? ' + this.hasTeam);
    console.log('field type: ' + this.fieldType);
    console.log('how game starts: ' + this.starter);
  }
}

let soccer = new Sport('soccer', true, 'spring', true, 'grass', 'kickoff');

soccer.startGame();
soccer.print();


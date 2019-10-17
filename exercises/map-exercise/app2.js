let matrix = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 3, 4]
]


for (let i = 0; i < matrix.length; i++) {
  for(let j = 0; j < matrix[i].length; j++) {
    (matrix[i][j] = 0);
  }
}

function Person (name, isAlive, hair) {
  this.name = name;
  this.isAlive = isAlive;
  this.hair = hair;
  this.speak = console.log(this.name)
}

let john = new Person('john', true, 'brown');
john.speak;


function multTable(n) {
  let mainArr = [];
  for (let i = 1; i < n + 1; i++) {
    let newArr = [];
    for (let j = 1; j < n + 1; j++) {
      newArr.push(j * i);
    }
    mainArr.push(newArr);
  }
  return mainArr;
}

console.log(multTable(8));



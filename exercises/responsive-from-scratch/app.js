

function destruct () {
  const expense = {
    type: 'business',
    amount: '$56',
    another: 'randomstring'
  }
  
  let {type, amount, another} = expense;
  return another;  
}

console.log(destruct());




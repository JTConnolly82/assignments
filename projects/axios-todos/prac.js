var reverse = function(x) {
  if (x > 0) {
    let stringed = x.toString();
   let lessthan = stringed.split('').reverse().join('');
    return (Number(lessthan));
  }  else if (x < 0) {
    let stringed = x.toString();
   let theNew = stringed.split('').reverse().join('');
   let stringNew = theNew.toString();
   let splitNew = stringNew.split('');
   splitNew.pop();
   let joined = splitNew.join('');
   let res = joined.toString();
   let realRes = ((Number(res)) * -1);
   return realRes;
  } 
}

let answer = reverse(-654321);
console.log(answer);
let smanser = reverse(12345678);
console.log(smanser);
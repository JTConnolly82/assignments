Array.prototype.filterV2 = function(func) {
  console.log('top')
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
   if (func(this[i])) {
     newArr.push(this[i]);
   }
  }
  console.log('outside the loop')
  return newArr;
}



const strs = [-4, 6, -32, 65, -21, 8, 9, 100];


const newPositives = strs.filterV2(num => {
  return num > 0;
})

const positives = strs.filter(num => {
  return num > 0;
})

console.log('regular filter -> ' + positives);
console.log('new filter -> ' + newPositives);
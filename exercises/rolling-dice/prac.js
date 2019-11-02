Array.prototype.mapV2 = function(func) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    let mappedNum = func(this[i]);
    newArr.push(mappedNum);
  }
  return newArr;
}
const strs = ["4", "6", "32", "65", "21"];

const nums = strs.mapV2(num=>{
  return Number(num);
})

console.log(nums)
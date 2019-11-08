// twoSum([1,2,3], 4);
//returns [0, 2] because 1 + 3 equals 4


function twoSum(arr, target) {
  let newArr = [];
  let usedArr = arr.reverse();
  let targCopy = target;
  for (let i = 0; i < usedArr.length; i++) {
    if (usedArr[i] <= targCopy) {
      newArr.push(usedArr.indexOf(usedArr[i]));
      targCopy -= usedArr[i];
    } 
  }
  return newArr;
}


let answer = twoSum([1, 2, 3], 4);
console.log(answer);
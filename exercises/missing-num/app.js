
const arr1 = [2,1,3,5]; // return 4
const arr2 = [12,10,9]; // return 11
const arr3 = [-3,0,-2,3,2,-1]; //return 1
let arr4 = [1, 3, 2, 7, 7, 4, 2, 7, 5, 1, 1, 1, 9, 9, 9];


function findMissing(arr) {
  returnArr = [];
 sorted = arr.sort(function(a, b) {
    return a - b;
  });
  for(let i = 0; i < sorted.length; i++) {
    if (sorted[i + 1] - sorted[i] > 1) {
      returnArr.push(sorted[i] + 1);
    }
  }
  return returnArr;
}

console.log('arr1:  ' + findMissing(arr1));
console.log('arr2:  ' + findMissing(arr2));
console.log('arr3:  ' + findMissing(arr3));
console.log('arr4:  ' + findMissing(arr4));
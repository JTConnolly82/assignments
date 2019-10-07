

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];




function changeTheArrays(fruits, veggies) {
  veggies.pop();
  fruits.shift();
  let fruitDex = fruits.indexOf('orange');
  fruits.push(fruitDex);
  let vegLength = veggies.length;
  veggies.push(vegLength);
  const food = fruits.concat(veggies); 
  food.splice(4, 2);
  let doof = food.reverse();
  let stringDoof = doof.toString();
  return stringDoof;

}

console.log(changeTheArrays(fruit, vegetables));














var shopper = {
  name: "john shopperguy",
  age: 29,
  isAlive: true,
  sayNameAge: function(){
    return 'name:' + shopper.name + ' ' + 'age: ' + shopper.age 
  },
  groceryCart: ['bread', 'potatoes', 'cheese']
}

console.log(shopper.sayNameAge());
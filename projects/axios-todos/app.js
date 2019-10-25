
class Todo {
  constructor(completed, id, title, description, price, imgUrl, sessionId="johnconnolly", __v=0) {
    this.completed = completed;
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.imgUrl = imgUrl;
    this.sessionId = sessionId;
    this.__v = __v;
  }
}
axios.get('https://api.vschool.io/johnconnolly/todo/').then((res)=>{
  for (let i = 0; i < res.data.length; i++) {
    let newTodo = new Todo(res.data[i].completed, res.data[i].id, res.data[i].title,
      res.data[i].description, res.data[i].price, res.data[i].imgUrl, 
      res.data[i].sessionId, res.data[i].__v);
       let item = document.createElement('div');
       item.className = 'item';
       let itemTitle = document.createElement('h2');
       itemTitle.className = 'itemtitle'
       itemTitle.innerText = newTodo.title;
      let itemDescription = document.createElement('h3');
      itemDescription.className = 'itemdescription';
      itemDescription.innerText = newTodo.description;
      let itemPrice = document.createElement('h4');
      itemPrice.className = 'itemprice';
      itemPrice.innerText = newTodo.price;
      let deleteButton = document.createElement('button');
      deleteButton.id = 'deletebutton';
      deleteButton.innerText = 'X';
      deleteButton.addEventListener('click', function () {
        axios.delete('https://api.vschool.io/johnconnolly/todo/' + res.data[i].id)
     });
      let itemImage = document.createElement('img');
      itemImage.className = 'itemimage';
      itemImage.src = newTodo.imgUrl;

       item.appendChild(itemTitle);
       item.appendChild(itemDescription);
       item.appendChild(itemPrice);
       item.appendChild(deleteButton);
       item.appendChild(itemImage);

       document.getElementById('mainlist').appendChild(item);

  }
});



// post request

let form = document.todoform;

form.addEventListener('submit', (e)=>{
  e.preventDefault();


  const newTodo =  {
    title: e.target.title.value,
    description: e.target.description.value,
    price: e.target.price.value,
    todoImageUrl: e.target.imageurl.value
  };





  axios.post('https://api.vschool.io/johnconnolly/todo/', newTodo).then((res)=>{
    makeTodo(res.data);
  })
})

function makeTodo(newTodo) {
  let item = document.createElement('div');
  item.className = 'item';
  let itemTitle = document.createElement('h2');
  itemTitle.className = 'itemtitle'
  itemTitle.innerText = newTodo.title;
 let itemDescription = document.createElement('h3');
 itemDescription.className = 'itemdescription';
 itemDescription.innerText = newTodo.description;
 let itemPrice = document.createElement('h4');
 itemPrice.className = 'itemprice';
 itemPrice.innerText = newTodo.price;
 let deleteButton = document.createElement('button');
 deleteButton.id = 'deletebutton';
 deleteButton.innerText = 'X';
 deleteButton.addEventListener('click', function () {
   axios.delete('https://api.vschool.io/johnconnolly/todo/' + this.newTodo.id);
  });
 let itemImage = document.createElement('img');
 itemImage.className = 'itemimage';
 itemImage.src = newTodo.imgUrl;

  item.appendChild(itemTitle);
  item.appendChild(itemDescription);
  item.appendChild(itemPrice);
  item.appendChild(deleteButton);
  item.appendChild(itemImage);

  document.getElementById('mainlist').appendChild(item);
}


// Why did I have to add this to the get and maketodo? why not work outside the 
// scope of the calls / functions?
// let deleter = document.getElementById('deletebutton');
// deleter.addEventListener('click', function () {
//   console.log('hi?');
// })

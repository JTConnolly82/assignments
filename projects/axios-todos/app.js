
class Todo {
  constructor(completed, id, title, description, price, imgUrl, sessionId="johnconnolly", __v) {
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
  console.log(res.data);
  for (let i = 0; i < res.data.length; i++) {
    let newTodo = new Todo(res.data[i].completed, res.data[i].id, res.data[i].title,
      res.data[i].description, res.data[i].price, res.data[i].imgUrl, 
      res.data[i].sessionId, res.data[i].__v);
       console.log(newTodo);
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
      let itemImage = document.createElement('img');
      itemImage.className = 'itemimage';
      itemImage.src = newTodo.imgUrl;

       item.appendChild(itemTitle);
       item.appendChild(itemDescription);
       item.appendChild(itemPrice);
       item.appendChild(itemImage);

       document.getElementById('mainlist').appendChild(item);

  }
});

// post request

// axios.post('https://api.vschool.io/johnconnolly/todo/').then((res)=>{

// });


document.addEventListener('submit', (e)=>{
  e.preventDefault();
  const newTodo = {
    title: 'thing'
  }

  axiso.post('https://api.vschool.io/johnconnolly/todo/', newTodo).then((res)=>{
    console.log(res.data);
    makeTodo(res.data);
  })
})




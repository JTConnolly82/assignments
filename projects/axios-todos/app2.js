// const newTodo =  {
//   title: e.target.title.value,
//   description: e.target.description.value,
//   price: e.target.price.value,
//   todoImageUrl: e.target.imageurl.value
// };

function makeTodo(todo) {
  let item = document.createElement('div');
  item.className = 'item';
  let titleDescDiv = document.createElement('div');
  titleDescDiv.className = 'titledescdiv'
  let itemTitle = document.createElement('h2');
  itemTitle.className = 'itemtitle'
  itemTitle.innerText = "Title: " + todo.title;
  if (todo.completed) {
     itemTitle.style.textDecoration = 'line-through';
   } else if (todo.completed === false) {
    itemTitle.style.textDecoration = 'none';
 }
  let itemDescription = document.createElement('h3');
  itemDescription.className = 'itemdescription';
  itemDescription.innerText = 'Description: ' + todo.description;
  titleDescDiv.appendChild(itemTitle);
  titleDescDiv.appendChild(itemDescription);
  let itemPrice = document.createElement('h4');
  itemPrice.className = 'itemprice';
  itemPrice.innerText = 'Price: ' + todo.price;
  let deleteButton = document.createElement('button');
  deleteButton.id = 'deletebutton';
  deleteButton.innerText = 'X';
  let editButton = document.createElement('button');
  editButton.id = 'editbutton';
  editButton.innerText = 'edit';
  editButton.addEventListener('click', function() {
    for (let i = 0; i < this.parentElement.children[1].children.length; i++){
      // change this up 
      }
    
  });
  let itemImage = document.createElement('img');
  itemImage.className = 'itemimage';
  itemImage.src = todo.imgUrl;
  let completeBox = document.createElement('input');
  completeBox.type = "checkbox";
  completeBox.addEventListener('change', function() {
   axios.put('https://api.vschool.io/johnconnolly/todo/'+ todo._id, {completed: !todo.completed}  ).then((res)=>{
    if (res.data.completed) {
      this.parentElement.children[1].style.textDecoration = 'line-through';
      completeBox.checked;
   } else if (res.data.completed === false) {
    this.parentElement.children[1].style.textDecoration = 'none';
 }
   });
});
    
 deleteButton.addEventListener('click', function () {
  axios.delete('https://api.vschool.io/johnconnolly/todo/' + todo._id);
 });


 item.appendChild(completeBox);
 item.appendChild(titleDescDiv)
 item.appendChild(itemPrice);
 item.appendChild(editButton);
 item.appendChild(deleteButton);
 item.appendChild(itemImage);
 mainlist.appendChild(item);

}

axios.get('https://api.vschool.io/johnconnolly/todo/').then((res)=>{
for (let i = 0; i < res.data.length; i++) {
  makeTodo(res.data[i]);
  }});

let form = document.todoform;

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  axios.post('https://api.vschool.io/johnconnolly/todo/', {
    title: e.target.title.value,
    description: e.target.description.value,
    price: e.target.price.value,
    imgUrl: e.target.imageurl.value
  }).then((res)=>{makeTodo(res.data)});
});




// is this format cleaner???
// Send a POST request
// axios({
//   method: 'post',
//   url: '/user/12345',
//   data: {
//     firstName: 'Fred',
//     lastName: 'Flintstone'
//   }
// });


//  https://api.vschool.io/johnconnolly/todo/

// "completed": false,
// "_id": "5db319c8e051c5345048f42b",
// "title": "todo",
// "description": "i have a thing to do",
// "price": 222,
// "imgUrl": 


function createTodo (todo) {
  let todoBox = document.createElement('div');
  todoBox.className = 'todoBox';
  let title = document.createElement('h2');
  title.innerText = todo.title;
  let titleLabel = document.createElement('h3');
  titleLabel.innerText = 'Title:'
  let desc = document.createElement('h2');
  let descLabel = document.createElement('h3');
  descLabel.innerText = 'Desc:'
  desc.innerText = todo.description;
  let titledesc = document.createElement('div');
  titledesc.appendChild(titleLabel);
  titledesc.appendChild(title);
  titledesc.appendChild(descLabel);
  titledesc.appendChild(desc);
  let delButton = document.createElement('button');
  delButton.innerText = 'delete';
  delButton.className = 'deletebutton';
  delButton.addEventListener('click', (e) => {
      console.log(e.target.parentElement.parentElement);
      e.target.parentElement.parentElement.remove(e.target.parentElement);
    }); 
  let editButton = document.createElement('button');
  editButton.innerText = 'edit';
  editButton.className = 'editbutton';
  editButton.addEventListener('click', (e)=>{
    e.preventDefault();
    let newTitleInput = document.createElement('input');
    newTitleInput.value = todo.title;
    let newDescInput = document.createElement('input');
    newDescInput.value = todo.description;
   title.replaceWith(newTitleInput);
   desc.replaceWith(newDescInput);
   let submitterButton = document.createElement('button');
   submitterButton.className = 'submitterbutton';
   submitterButton.innerText = 'submit';
   editButton.replaceWith(submitterButton);
   submitterButton.addEventListener('click', ()=>{
    let editedInfo = {
      title: newTitleInput.value,
      description: newDescInput.value,
    };
    axios.put('https://api.vschool.io/johnconnolly/todo/' + todo._id, editedInfo).then((res)=>{

    });

   });
  });
  let checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.className = 'checkbox';
  if (todo.completed) {
    todoBox.style.opacity = "50%";
  }
  checkBox.addEventListener('change', ()=>{
    axios.put('https://api.vschool.io/johnconnolly/todo/' + todo._id, {completed: !todo.completed});
  });
  let checkLabel = document.createElement('h3');
  checkLabel.innerText = 'Completed?';
  let checkDiv = document.createElement('div');
  checkDiv.className = 'checkDiv';
  checkDiv.appendChild(checkLabel);
  checkDiv.appendChild(checkBox);
  let todoBoxInputs = document.createElement('div');
  todoBoxInputs.className = 'todoboxinputs'
  todoBoxInputs.appendChild(checkDiv);
  todoBoxInputs.appendChild(editButton);
  todoBoxInputs.appendChild(delButton);
  let image = document.createElement('img');
  image.src = todo.imgUrl;
  image.addEventListener('dblclick', function() {
    let editPicInput = document.createElement('input');
    editPicInput.className = 'editpicinput';
    let editPicButton = document.createElement('button');
    editPicButton.className = 'editpicbutton';
    editPicButton.innerText = 'change pic';
    todoBox.appendChild(editPicInput);
    todoBox.appendChild(editPicButton);
    editPicButton.addEventListener('click', (e)=>{
      axios.put('https://api.vschool.io/johnconnolly/todo/' + todo._id, {imgUrl: editPicInput.value}).then(()=>{
        e.target.parentElement.replace(e.target.parentElement)
      });
    });
    // display changed todo
  }, {once: true});
  todoBox.appendChild(titledesc);
  todoBox.appendChild(todoBoxInputs);
  todoBox.appendChild(image);
  document.getElementsByClassName('main')[0].appendChild(todoBox);
}

const getTodos = () => {
  axios.get('https://api.vschool.io/johnconnolly/todo/').then((res)=>{
    res.data.map(todo=>{createTodo(todo)});
  });
}

getTodos();

let theForm = document.twodewform;
theForm.addEventListener('submit', function (e) {
  e.preventDefault();
  let todo = {
    title: theForm.title.value,
    description: theForm.description.value,
    price: theForm.price.value,
    imgUrl: theForm.imageurl.value
  }
  console.log('hellofromfunction');
  console.log(todo);
  axios.post('https://api.vschool.io/johnconnolly/todo/', todo).then((res)=>{
    createTodo(res.data);
  });
  theForm.reset();
});




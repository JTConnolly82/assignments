



document.getElementById('add-todo').addEventListener('submit', (e)=>{
    e.preventDefault();
    let newItem = document.getElementById('title').value;
    let newTodo = document.createElement('li');
    let todoTitle = document.createElement('div');
    todoTitle.innerText = newItem;
    let editButton = document.createElement('button');
    editButton.innerText = 'edit';
    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'X';
    document.getElementById('list').appendChild(newTodo);
    newTodo.appendChild(todoTitle);
    newTodo.appendChild(editButton);
    newTodo.appendChild(deleteButton);
});



document.addEventListener('click', (e)=>{
  if (e.target.innerText === 'X') {
    console.log(e.target);
    e.target.parentElement.remove(e.target);
  }
})


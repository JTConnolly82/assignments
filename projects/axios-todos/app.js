

// get request

axios.get('https://api.vschool.io/johnconnolly/todo/').then((res)=>{
  console.log(res.data);
  for (let i = 0; i < res.data.length; i++) {
    let elly = document.createElement('h2');
    elly.innerText = res.data[i].title;
    console.log(res.data[i].title);
    let pricing = res.data[i].price;
    let price = document.createElement('p');
    price.innerText = 'price: ' + pricing;
    elly.appendChild(price);
    let del = document.createElement('button');
    del.innerText = "delete";
    del.className = 'delbutton'
    elly.appendChild(del);
    let comp = document.createElement('span');
    comp.innerHTML = "<p>Completed?</p><input class='check' type='checkbox'/>"
    comp.className = 'completed-span';
    elly.appendChild(comp);
    let line = document.createElement('hr');
    elly.appendChild(line);
    let todoList = document.getElementById('mainlist');
    main.className = 'todo';
    todoList.appendChild(elly);

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




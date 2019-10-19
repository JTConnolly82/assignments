


let form = document.addItem;

form.addEventListener('submit', function(e) {
  e.preventDefault();

  let item = form.title.value;
  console.log(item);

  let element =  `<li>
                   <div>${item}</div>
                   <button>edit</button>
                   <button>X</button>
                  </li>
  `
  let li = document.createElement('li')
  let div = document.createElement('div')
  let editButton = document.createElement('button')
  editButton.addEventListener('click',function(){

  })

  document.getElementById('list').appendChild()
  

});

let button = document


let list = document.getElementById('list');


list.addEventListener('click', function(e) {
  e.preventDefault();
  for (let i = 0; i < list.children.length; i++) {
    if (e.target === list.children[i].children[2]) {
      list.removeChild(list.children[i]);
    }
    else if (e.target === list.children[i].children[1] && list.children[i].children[1].innerText != 'X' &&
    list.children[i].children[2].outerHTML != '<input>')
     {
      let theinput = document.createElement('input');
      theinput.value = list.children[i].children[0].innerText;
      theinput.innnerText = theinput.value;
      list.children[i].children[1].innerText = 'submit';
      list.children[i].removeChild(list.children[i].children[0]);
      list.children[i].appendChild(theinput);
    }
  }
})



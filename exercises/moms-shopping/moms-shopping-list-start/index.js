


let form = document.addItem;

form.addEventListener('submit', function(e) {
  e.preventDefault();

  let item = form.title.value;
  console.log(item);

  let element = `<li>
                  <div>${item}</div>
                  <button>edit</button>
                  <button>X</button>
                 </li>
  `

  document.getElementById('list').innerHTML += element;

});


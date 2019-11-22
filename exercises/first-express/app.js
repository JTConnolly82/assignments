const express = require("express");
const uuid = require('uuid/v4');
const app = express();

const PORT = 8000;


// Todos should have a data format similar to:

// {
//     "name": "The name",
//     "description": "The description of the todo"
//     "imageUrl": "http://www.myimage...."
//     "completed": false
//     "_id": "23k4lh23h2"
// }

const todoArr = [
  {
  title: 'first one here',
  description: 'the first todo',
  _id: '1'
  },
  {
    title: 'another thing',
    description: 'todos are great',
    _id: '2'
  },
  {
    title: 'and... another!',
    description: 'i love todo apps',
    _id: '3'
  }
];

app.use(express.json());


app.get('/', (req, res) => {
  res.send('hi hello, go to /todos to see the todos!!!');
});

app.get('/todos', (req, res) => {
  res.send(todoArr);
  console.log('✨✨✨✨✨✨✨✨')
  console.log('✨get request😎✨')
  console.log('✨✨✨✨✨✨✨✨')
  console.log(todoArr);
});

// edit the post for the data used on this one
app.post('/todos', (req, res) => {
  req.body._id = uuid();
  todoArr.push(req.body);
  res.send({
    itemAdded: req.body
  })
  console.log('💥💥 POSTED 💥💥')
  console.log(todoArr);
});

//edit the delete for data usedhere
// :_id is a placeholder for the params object, you can then access
// the specifics by using params.whatever, try logging these out

app.delete('/todos/:_id', (req, res) => {
  let index = todoArr.findIndex(todo => todo._id === req.params._id);
  todoArr.splice(index, 1);
  res.send(todoArr);
  console.log('🔥🐲🔥 DELETE SENT')
  console.log(todoArr)
});

app.put('/todos/:id', (req, res) => {
  let updatedTodo = req.body;
  console.log(req.params.id)
  todoArr.forEach((todo)=>{
    if (todo._id === req.params._id) {
      Object.assign(todo, updatedTodo);
    }
  });
  console.log('✅ PUT REQUEST SUBMITTED ✅');
  res.send(todoArr);
  console.log(todoArr);
});



app.listen(PORT, () => {
  console.log('still running');
});
const express = require('express');
const app = express();
const uuid = require('uuid/v4');
const mongoose = require('mongoose');
const morgan = require('morgan');
const Todo = require('./todoModel');

mongoose.connect('mongodb://localhost:27017/todos', 
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  })
  .then(() => console.log('connected to the DB'))
  .catch((err) => console.error(err));


const PORT = 8000;


app.use(express.json());
app.use(morgan('combined'));


app.get('/todos', (req, res) => {
  Todo.find((err, todos) => {
    if(err) {
      res.status(500)
      return res.send(err)
    }
    return res.status(200).send(todos);
  })
});

app.post('/todos', (req, res) => {
  req.body._id = uuid();
  console.log('posting')
  const newTodo = new Todo(req.body);
  newTodo.save((err, savedTodo) => {
    if(err) return res.status(500).send(err)
    return res.status(201).send(savedTodo)
  })
})






app.listen(PORT, () => console.log(`listening on ${PORT}`));
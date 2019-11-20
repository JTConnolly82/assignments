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

app.use(express.json());

const todoArr = [];

app.get('/', (req, res) => {
  res.send('hi hello, go to /todos to see the todos!!!');
});

app.get('/todos', (req, res) => {
  res.send(todoArr);
});

// edit the post for the data used on this one
app.post('/todos', (req, res) => {
  database.push(rq.body);
  res.send({
    itemAdded: req.body
  })
});

//edit the delete for data usedhere
// :_id is a placeholder for the params object, you can then access
// the specifics by using params.whatever, try logging these out

app.delete('/places/:_id', (req, res) => {
  console.log(req.params._id);
  let {_id} = req.params;
  let index = database.findIndex(spot => spot._id === _id);
  database.splice(index, 1);
  // could also send a string or something else
  res.send(database);
});


app.put('/places/:_id', (req, res) => {
  let { _id } = req.params;
  let updatedSpot = req.body;
  // foreach used b/c we don't want to return a new array
  database.forEach(spot => {
    if (spot._id === _id) {
      Object.assign(spot, updatedSpot);
    }
  });
  res.send(database);
});

// ex uuid
// req.body._id == uuid();
// works after importing uuid v4



app.listen(PORT, () => {
  console.log('still running');
});
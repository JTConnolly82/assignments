const express = require("express");
const uuid = require('uuid/v4');
const app = express();

const PORT = 8000;



const bounties = [
  {
    firstName: 'Lando',
    lastName: 'Calrissian',
    alive: 'true',
    amount: '5000',
    type: 'jedi',
    _id: '1'
  },
  {
    firstName: 'Luke',
    lastName: 'Skywalker',
    alive: 'true',
    amount: '8000',
    type: 'jedi',
    _id: '2'
  },
  {
    firstName: 'Mace',
    lastName: 'Windu',
    alive: 'false',
    amount: '6000',
    type: 'jedi',
    _id: '3'
  },
  {
    firstName: 'Darth',
    lastName: 'Vader',
    alive: 'false',
    amount: '10000',
    type: 'sith',
    _id: '4'
  },
];

app.use(express.json());


app.get('/jedi', (req, res) => {
  res.send(bounties);
  console.log('📡 get request 📡')
  console.log(bounties);
});

app.post('/jedi', (req, res) => {
  req.body._id = uuid();
  bounties.push(req.body);
  res.send(bounties);
  console.log('👉 post sent');
  console.log(bounties);
});

app.delete('/jedi/:_id', (req, res) => {
  let jediIndex = bounties.findIndex( bounty => bounty._id === req.params._id);
  bounties.splice(jediIndex, 1);
  res.send(bounties);
  console.log('delete sent ❌')
  console.log(bounties);
});

app.put('/jedi/:_id', (req, res) => {
  let newJediInfo = req.body;
  bounties.forEach(bounty => {
    if (bounty._id === req.params._id) {
      Object.assign(bounty, newJediInfo);
    }
  })
  res.send(bounties);
  console.log('put request 👏👏👏')
  console.log(bounties);
});


app.listen(PORT, () => {
  console.log(`🏃🏃 on ${PORT}`);
});
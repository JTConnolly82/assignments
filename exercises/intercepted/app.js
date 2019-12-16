const express = require('express');
const app = express();


const port = 8000;

app.use(express.json());


app.use('/', function (req, res, next) {
  console.log('started')
  req.body.newparam = 'this thing?'
  next()
})

app.get('/:id', function (req, res) {
  req.body.alsonew = 'newness from app.get'
  console.log(req.body)
  res.send(req.params.id)
  console.log('ended')
})




app.listen(port, () => {
  console.log(`listening on ${port}`)
})
const express = require('express');
const app = express();

const port = 4444;

const inventoryItems = [
  {
      name: "banana",
      type: "food",
      price: 200,
  },{
      name: "pants",
      type: "clothing",
      price: 2330,
  },{
      name: "basket ball",
      type: "toy",
      price: 1000,
  },{
      name: "rockem sockem robots",
      type: "toy",
      price: 1500,
  },{
      name: "shirt",
      type: "clothing",
      price: 800,
  },{
      name: "soup",
      type: "food",
      price: 300,
  },{
      name: "flour",
      type: "food",
      price: 100,
  }
]


app.use(express.json());


app.get('/fruit/name', (req, res, next) => {
    let filtered = inventoryItems.filter((item) => {
      return item.name === req.query.name
    })
    res.send(filtered);
})


app.get('/fruit/price', (req, res, next) => {
  let min = req.query.min;
  let max = req.query.max;
  console.log(min);
  console.log(max);
  let pricedFruits = inventoryItems.filter((item) => {
    if (item.price >= min && item.price < max) {
      return item;
    }
  })
  res.send(pricedFruits)
})









app.listen(port, () => {
  console.log(`listening on ${port} .`)
})
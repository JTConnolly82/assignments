const express = require('express');
const aptApiRouter = express.Router();
const Apartment = require('../models/apt');



aptApiRouter.post('/', (req, res, next) => {
  //add users id to new obj before saving the newly created apartment
  const newApartment = new Apartment(req.body);
  console.log(`new apartment -->  ${newApartment}`)
  newApartment.save((err, savedApartment) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(savedApartment);
  })
})


module.exports = aptApiRouter
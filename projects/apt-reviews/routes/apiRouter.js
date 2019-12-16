const express = require('express');
const apiRouter = express.Router();
const Review = require('../models/review');


apiRouter.post('/', (req, res, next) => {
  //add users id to new obj before saving the newly created review
  req.body.user = req.user._id;
  const newReview = new Review(req.body)
  console.log(`new review -->  ${newReview}`)
  newReview.save((err, savedReview) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(savedReview);
  })
})

module.exports = apiRouter
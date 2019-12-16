const express = require('express');
const reviewRouter = express.Router();
const Review = require('../models/review');



reviewRouter.get('/', (req, res, next) => {
  Review.find({user: req.user._id}, (err, reviews) => {
    if (err) {
      res.status(500);
      return next(err);
    };
    return res.status(200).send(reviews);
  });
});

// reviewRouter.post('/', (req, res, next) => {
//   //add users id to new obj before saving the newly created review
//   req.body.user = req.user._id;
//   const newReview = new Review(req.body)
//   console.log(`new review -->  ${newReview}`)
//   newReview.save((err, savedReview) => {
//     if (err) {
//       res.status(500);
//       return next(err);
//     }
//     return res.status(201).send(savedReview);
//   })
// })

reviewRouter.get('/:aptId', (req, res, next) => {
  Review.find((err, review) => {
    if (err) {
      res.status(500);
      return next(err);
    };
    return res.status(200).send(review);
  });
  })
reviewRouter.put('/:aptId', (req, res, next) => {
    res.send(`put on ${req.params.aptId}`)
  })
reviewRouter.delete('/:aptId', (req, res, next) => {
    res.send(`delete on ${req.params.aptId}`)
  })

module.exports = reviewRouter;
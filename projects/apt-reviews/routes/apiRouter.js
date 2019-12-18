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

apiRouter.put('/:aptId', (req, res, next) => {
  Review.findOneAndUpdate({
        apt: req.params.aptId, 
        _id: req.body._id
    }, 
    req.body.newObj, 
    {new: true}, 
    (err, updatedReview) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    console.log('review',updatedReview)
    return res.send(updatedReview)
  })
})

apiRouter.delete('/:aptId', (req, res, next) => {
  Review.findOneAndRemove({
          apt: req.params.aptId, 
          _id: req.body._id
    },
     req.body.deleteObj, (err, deletedReview) => {
    if (err) {
      res.status(500);
      return next(err)
    }
    return res.send(deletedReview);
  })
})

module.exports = apiRouter
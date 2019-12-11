const express = require('express');
const reviewRouter = express.Router();


reviewRouter.route("/")
  .get((req, res) => {
    res.send('getting reviews');
  })
  .post((req, res) => {
    res.send("post on reviews");
  })

reviewRouter.route("/:aptId")
  .get((req, res) => {
    res.send(`get on reviews/${req.params.aptId} endpoint`);
  })
  .put((req, res) => {
    res.send(`put on ${req.params.aptId}`)
  })
  .delete((req, res) => {
    res.send(`delete on ${req.params.aptId}`)
  })

  module.exports = reviewRouter;
const express = require("express");
const authRouter = express.Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");

authRouter.post('/signup', (req, res, next) => {
  User.findOne(
    {name: req.body.name},
    (err, existingUser) => {
      if(err){
        res.status(500)
        return next(err)
      } 
      if (existingUser) {
        res.status(400);
        return next(new Error('this username is already taken'));
      } 
      const newUser = new User(req.body)
      newUser.save((err, savedUser) => {
        if (err) {
          res.status(500);
          return next(err);
        }
        const token = jwt.sign(savedUser.toObject(), process.env.SECRET)
        return res.status(201).send({token, user: savedUser})
      })
    }
  )
})

authRouter.post("/login", (req, res, next) => {
  User.findOne({name: req.body.name.toLowerCase()}, (err, user) => {
      if (err) {
        res.status(500);
        next(err);
      }
      //does a user w that name exist, and does password match
      if (!user || user.password !== req.body.password) {
        res.status(403);
        return next(new Error("Email or password are incorrect"));
      }
      //at this point the user exists and their password matches
      const token = jwt.sign(user.toObject(), process.env.SECRET);
      return res.status(200).send({
        token, 
        user: user.toObject()
      })
  });
});
    
    module.exports = authRouter;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const aptSchema = new Schema({
  name: String,
  email: String,
  password: String,
  //Avatar: Image?
  reviews: [reviewSchema], //syntax?
})

const Review = mongoose.model('Apartment', aptSchema);
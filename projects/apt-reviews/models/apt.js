const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const aptSchema = new Schema({
  address: String,
  bedrooms: Number,
  bathrooms: Number,
  reviews: [reviewSchema], //syntax?
})

const Review = mongoose.model('Apartment', aptSchema);
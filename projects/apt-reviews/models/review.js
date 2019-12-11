const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  date: String,
  title: String,
  Apt: {
    type: mongoose.Types.ObjectId,
    ref: 'Apt'
  },
  Description: String,
  wouldRecommend: Boolean,
  Pictures: [String]
})

const Review = mongoose.model('Review', reviewSchema);
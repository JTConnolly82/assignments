const mongoose = require('mongoose');



const Schema = mongoose.Schema;


const todoSchema = new Schema({
  title: String,
  description: String,
  complete: Boolean,
  _id: String
})


module.exports = mongoose.model("Todo", todoSchema);
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var foodSchema = new Schema({
  name: String,
  price: Number,
  expired_date: Date
},{
  timestamps:true
})

var Food = mongoose.model('Food', foodSchema);

module.exports = Food;

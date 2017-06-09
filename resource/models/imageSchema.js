var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var imageSchema = mongoose.Schema({
 path: {
   type: String,
   required: true,
   trim: true
 },
 originalname: {
   type: String,
   required: true
 }

});


var Image = module.exports = mongoose.model('image', imageSchema);

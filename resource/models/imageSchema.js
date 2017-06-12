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


module.exports = mongoose.model('Image', imageSchema);

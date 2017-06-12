var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var documentSchema = mongoose.Schema({
  content: {
    type: String,
    required: true
  }
});


module.exports = mongoose.model('Document', documentSchema);

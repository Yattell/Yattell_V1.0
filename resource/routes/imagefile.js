var express = require('express');
var router = express.Router();
var multer = require('multer');
var mongoose = require('mongoose');
var path = require('path');
var mkdirp = require('mkdirp');
var Image = require('../models/imageSchema');

// create a storage to store image
function extention(name){
  des = 'images/'+name;
  mkdirp(des);
  return des;
}
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, extention(req.article));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
})

var upload = multer({ storage: storage });

router.post('/', upload.any(), function(req, res, next) {
  var image = new Image();
  image.path = req.files[0].path;
  image.originalname = req.files[0].originalname;
  image.save(function(error, result){
      if(!error){
        res.send(result.path);
      }else{
        res.status(403).send(error);
      }
    });

});
//upload image
router.get('/', function(req, res, next) {
 res.render('index.ejs');
});
module.exports = router;

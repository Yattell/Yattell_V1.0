var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var path = require('path');
var ObjectId = require('mongodb').ObjectID;
var Document= require('../models/documentSchema');

// store document in database
router.post('/', function(req, res, next) {
  console.log(req.query);
  var document = new Document();
  document.content= req.query.content;

  document.save(function(error, result){
      if(!error){
	console.log("SUCCESS: Recieved file and saved to database.");
        res.send(result._id);
      }else{
	console.log("FAILURE: Error occured with request.");
        res.status(403).send(error);
      }
    });

});

// retrive content from table
router.get('/', function(req, res){
  var id = req.query.id;
  console.log(id);
  Document.find({"_id": ObjectId(id)}).exec(function(err, found){
    if(err){
      console.log(err);
      res.send(err);
    }
    else{
      console.log(found);
      res.send({'content': found});
    }
  });
});

router.put('/', function(req, res){
  var id = req.query.id;
  var new_content = req.query.content;
  Document.update({_id:id}, {$set:{content:new_content}},function(err, result){
    if(err){
      res.send(err);
    }
    else{
      console.log(result);
      res.send("Success");
    }
  });
});

router.delete('/', function(req, res){
  var id = req.query.id;
  Document.remove({_id: id}, function(err,result){
    if(err){
      console.log(err);
      res.send(err);
    }
    else{
      console.log(result);
      res.send("Success");
    }
  });
});
module.exports = router;

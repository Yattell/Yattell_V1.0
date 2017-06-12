var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
app.use(bodyParser.json());

//To get the access for the functions defined in index.js class
var imageFuncs = require('./routes/imagefile');
var documentFuncs = require('./routes/documentfile');

// connect to mongo,
//i have created mongo collection in mlab.com.. the below is my database access url..
//So make sure you give your connection details..
mongoose.connect('mongodb://nodejsapi:nodejsapi@ds041516.mlab.com:41516/mynodejsapp');
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});
app.use('/', imageFuncs);
app.use(express.static('images'));
app.use('/image', imageFuncs);
app.use('/documents', documentFuncs);
app.listen(3000);

console.log('Running on port 3000');

var express = require('express');
var app = express();
var swig = require('swig');
var routes = require('./routes/');
var mime = require('mime');
var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
var fs = require('fs');


app.use(function(request, response, next){
	console.log(request.method + " " + request.url + " " + response.statusCode);
	next();
});

app.use('/', routes);

app.engine('html', swig.renderFile);

app.set('view engine', 'html');

app.set('views', __dirname + '/views');

swig.setDefaults({cache: false});

app.use(function(req, res, next) {
  console.log(req.path)
  var mimeType = mime.lookup(req.path)
  fs.readFile('./public/' + req.path, function(err, fileBuffer) {
    if(err) return next()
    res.header('Content-Type', mimeType)
    res.send(fileBuffer)
  })
})

app.listen(3000, function(){
	console.log("server listening...");
});
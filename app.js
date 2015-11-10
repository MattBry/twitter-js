var express = require('express');
var app = express();
var swig = require('swig');

var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];


app.engine('html', swig.renderFile);

app.set('view engine', 'html');

app.set('views', __dirname + '/views');

swig.setDefaults({cache: false});

app.use(function(request, response, next){
	console.log(request.method + " " + request.url + " " + response.statusCode);
	next();
});

app.get("/", function(request, response){
	response.render( 'index', {title: 'Hall of Fame', people: people} );
});

app.get("/news", function(request, response){
	response.send("presidential debates continue");
});

app.listen(3000, function(){
	console.log("server listening...");
});
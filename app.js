var express = require('express');
var app = express();

app.use(function(request, response, next){
	console.log(request.method + " " + request.url + " " + response.statusCode);
	next();
});

app.get("/", function(request, response){
	response.send("welcome to the page");
});

app.get("/news", function(request, response){
	response.send("presidential debates continue");
});

app.listen(3000, function(){
	console.log("server listening...");
});
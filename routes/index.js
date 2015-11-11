var express = require('express');
var router = express.Router();
var tweetBank = require('../tweetBank');
var path = require('path');


router.get('/', function(request, response){
	var tweets = tweetBank.list();
	response.render("index", {title: "Twitter.js", tweets: tweets, showForm: true})
});

router.get('/users/:name', function(request, response){
	
	var name = request.params.name;
	var list = tweetBank.find( {name: name});
	console.log(list);

	response.render("index", {title: 'Posts by ' + name, tweets: list, defaultText: name})
});

router.get('/users/:name/tweets/:id', function(request, response){
	
	var name = request.params.name;
	var id = request.params.id;
	var list = tweetBank.find( {id: id});
	

	response.render("index", {title: 'Posts by ' + name, tweets: list})
});

router.post('/submit', function(request, response) {
  console.log(request.body);
  var name = request.body.name;
  var text = request.body.text;
  tweetBank.add(name, text);
  response.redirect('/');
});


module.exports = router;
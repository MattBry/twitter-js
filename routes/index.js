var express = require('express');
var router = express.Router();
var tweetBank = require('../tweetBank');
var path = require('path');
var parser = require('body-parser');


router.get('/', function(request, response){
	console.log("skipped the other route");
	var tweets = tweetBank.list();
	response.render("index", {title: "Twitter.js", tweets: tweets, showForm: true})
});

router.get('/users/:name', function(request, response){
	
	var name = request.params.name;
	var list = tweetBank.find( {name: name});
	console.log(list);

	response.render("index", {title: 'Posts by ' + name, tweets: list})
});

router.get('/users/:name/tweets/:id', function(request, response){
	
	var name = request.params.name;
	var id = request.params.id;
	var list = tweetBank.find( {id: id});
	

	response.render("index", {title: 'Posts by ' + name, tweets: list})
});


module.exports = router;
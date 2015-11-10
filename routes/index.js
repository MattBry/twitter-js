var express = require('express');
var router = express.Router();
var tweetBank = require('../tweetBank');
var path = require('path');
//console.log(__dirname);
// router.use(function(request, response, next) {
// 	if (__dirname + '../public' + request.path) {
// 		response.sendFile(path.join(__dirname, '../public', request.path));
// 	}
// 	next();
// });

router.get('/', function(request, response){
	console.log("skipped the other route");
	var tweets = tweetBank.list();
	response.render("index", {title: "Twitter.js", tweets: tweets})
});

module.exports = router;
'use strict';

var express = require('express'),
      posts = require('./mock/posts.json');

var app = express();



app.get('/', function(req, res){
  res.send("<h1>I am in love with treehouse</h1>")
});

app.get('/blog/:title?', function(req, res){
  var title = req.params.title;
  if(title == undefined){
    res.status(503);
    res.send("This page is under construction");
  } else{
    var post = posts[title];
    res.send(post);
  }

});
app.listen(3000, function(){
  console.log("The frontend server is running on port 3000.")
});

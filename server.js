var express = require('express');
var path = require('path');

//var ua = require('universal-analytics');
//var visitor = ua('UA-90734086-2');
  // set(key, value)
  // visitor.set("uid", "123456789")
  
var app = express();

console.log(__dirname);
app.use(express.static(__dirname));

app.get('*', (req, res) => {
  //visitor.pageview("/_temp/test1").send();
  res.sendFile(path.resolve('index.html'));
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('Site available: http://localhost:' + port);
});

setInterval(function() {
  app.get("https://tranquil-gorge-29763.herokuapp.com/");
}, 300000);

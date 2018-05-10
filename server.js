var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.resolve('index.html'));
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('App environment:' + process.env.NODE_ENV);
  console.log('Site available: http://localhost:' + port);
});

// Hack to keep dyno up
setInterval(function() {
  app.get("https://tranquil-gorge-29763.herokuapp.com/");
}, 300000);

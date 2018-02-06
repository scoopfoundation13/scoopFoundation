var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var stripeTestKeys = require('./stripeTestKeys');

// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
var stripe = require("stripe")(process.env.STRIPE_SECRET_LIVE || stripeTestKeys.STRIPE_SECRET_TEST);
  
var app = express();
var jsonParser = bodyParser.json();
app.set('view engine', 'ejs');
app.use(express.static(__dirname));

app.post("/donation", jsonParser, (req, res) => {
  
  if (!req.body) {return res.sendStatus(400);}

  var rb = req.body;
  
  // Charge the user's card:
  stripe.charges.create({
    amount: rb.amount,
    currency: "eur",
    description: "Example charge",
    source: rb.stripeToken,
    metadata: {
      "name": rb.name,
      "company": rb.company,
      "email": rb.email,
      "message": rb.message
    }
  }, function(err, charge) {
    if (err){
      res.json({
        'error': err
      })
    }
    if (charge) {
      res.json({
        'charge': charge
      })
    }
  });
});

app.get('*', (req, res) => {
  var secure = false;
  if (req.secure || req.headers.host === 'localhost:3000') {
    secure = true;
  }
  res.render('pages/index', {'https': secure})
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('Site available: http://localhost:' + port);
});

setInterval(function() {
  app.get("https://tranquil-gorge-29763.herokuapp.com/");
}, 300000);

var express = require('express');
var path = require('path');
var fs = require('fs');

var expressSanitizer = require('express-sanitizer');
var bodyParser = require('body-parser');

var http = require('http');
var https = require('https');

var port = process.env.PORT || 3000;

var jsonParser = bodyParser.json();
var expressSanitized = expressSanitizer();

var stripeTestKeys = require('./stripeTestKeys');
// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
var stripe = require("stripe")(process.env.STRIPE_SECRET_LIVE || stripeTestKeys.STRIPE_SECRET_TEST);



var Email = require('./email');
var mail = new Email();




var app = express();
app.use(express.static(__dirname));


app.post("/donation", jsonParser, (req, res) => {
  
  if (!req.body) {return res.sendStatus(400);}

  var rb = req.body;
  
  // Charge the user's card:
  stripe.charges.create({
    amount: rb.amount,
    currency: "eur",
    description: "Donation",
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

app.post("/subscription/10", jsonParser, (req, res) => {
  var customer, rb, subscription;
  if (!req.body) {return res.sendStatus(400);}

  rb = req.body;
  
  customer = stripe.customers.create({
    email: rb.email,
    metadata: {
      "name": rb.name,
      "company": rb.company,
      "email": rb.email,
      "message": rb.message
    }
  }, function(err, customer) {
    if (err) {
      debugger;
    }
    debugger;
  });
  
  // save this into db
  // customer.id
  // customer.email
  // customer.metadata

  subscription = stripe.subscription.create({
    "customer": customer.id,
    "items": [{"plan": "subscription-10"}]
  }, function(err, subscription) {
    if (err) {
      debugger;
    }
    debugger;
  });
});


app.post("/stripe/webhooks", jsonParser, expressSanitized, (req, res) => {
  if (!req.body) {return res.sendStatus(400);}
  mail.send(req.sanitize(req.body.text));
  res.status(200).end();
});


app.get('*', (req, res) => {
  var secure = false;
  if (req.secure || req.headers.host === 'localhost:3000') {
    secure = true;
  }
  res.render('pages/index', {'secure': secure})
});



console.log('App environment: ' + process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
  console.log('For Debugging:', process.versions);
  
  /*
  var certOptions = {
    key: fs.readFileSync(path.resolve('./server.key')),
    cert: fs.readFileSync(path.resolve('./server.crt'))
  }
  console.log(1);
  var server = https.createServer(certOptions, app).listen(443, function() {
    console.log('App environment:' + process.env.NODE_ENV);
    console.log('Site available: http://localhost:' + port);
  });
  */

  var privateKey  = fs.readFileSync('./server.key', 'utf8');
  var certificate = fs.readFileSync('./server.crt', 'utf8');
  var credentials = {key: privateKey, cert: certificate};
  
  var httpsServer = https.createServer(credentials, app);
  
  httpsServer.listen(8443, function() {
    console.log('SECURE Site available: https://localhost:8443');
  });
  var httpServer = http.createServer(app);
  httpServer.listen(port, function() {
    console.log('Site available: http://localhost:' + port);
  });
} else {
  app.listen(port, function() {
    console.log('Site available: http://localhost:' + port);
  });
  
  setInterval(function() {
    app.get("https://tranquil-gorge-29763.herokuapp.com/");
  }, 300000);
}


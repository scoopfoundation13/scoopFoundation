const nodemailer = require('nodemailer');

let config = {
    host: process.env.EMAIL_HOST || "smtp.gmail.com",
    port: process.env.EMAIL_PORT || 443,
    secure: process.env.EMAIL_SECURE || true,
    auth: {
        user: process.env.EMAIL_USER || "oakenfold.test@gmail.com",
        pass: process.env.EMAIL_PASS || "Test 123"
    }  
};
console.log("config", config);

function email () {
    
    let transporter = nodemailer.createTransport(config);

    function send(text,html) {
        console.log("email.js > send()");
        let mailOptions = {
            "from": '"Scoop Foundation Website" <do-not-reply@scoopfoundation.com>',
            "to": process.env.EMAIL_TEST || "oakenfold.test@gmail.com",
            "subject": 'Scoop Foundation: Notification',
            "text": JSON.stringify(text),
            "html": (html ? JSON.stringify(html) : JSON.stringify(text))
        };

        // send mail with defined transport object
        return transporter.sendMail(mailOptions, (error, info) => {
            console.log("email.js > transporter.sendMail()");
            if (error) {
                console.log('ERROR 1');
                console.dir(error);
                return error;
            }
            console.log('info:', info);
            //console.log('Message sent: %s', info.messageId);
        });
    }

    return {
        send
    }

}
// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
function test() {
    nodemailer.createTestAccount((err, account) => {

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: account.user, // generated ethereal user
                pass: account.pass  // generated ethereal password
            }
        });

        var fakeText = {
            "created": 1326853478,
            "livemode": false,
            "id": "evt_00000000000000",
            "type": "charge.succeeded",
            "object": "event",
            "request": null,
            "pending_webhooks": 1,
            "api_version": "2018-02-06",
            "data": {
              "object": {
                "id": "ch_00000000000000",
                "object": "charge",
                "amount": 100,
                "amount_refunded": 0,
                "application": null,
                "application_fee": null,
                "balance_transaction": "txn_00000000000000",
                "captured": false,
                "created": 1519237778,
                "currency": "cad",
                "customer": null,
                "description": "My First Test Charge (created for API docs)",
                "destination": null,
                "dispute": null,
                "failure_code": null,
                "failure_message": null,
                "fraud_details": {
                },
                "invoice": null,
                "livemode": false,
                "metadata": {
                },
                "on_behalf_of": null,
                "order": null,
                "outcome": null,
                "paid": true,
                "receipt_email": null,
                "receipt_number": null,
                "refunded": false,
                "refunds": {
                  "object": "list",
                  "data": [
          
                  ],
                  "has_more": false,
                  "total_count": 0,
                  "url": "/v1/charges/ch_1By2LWLrqYTlURlwwrcN1VWy/refunds"
                },
                "review": null,
                "shipping": null,
                "source": {
                  "id": "card_00000000000000",
                  "object": "card",
                  "address_city": null,
                  "address_country": null,
                  "address_line1": null,
                  "address_line1_check": null,
                  "address_line2": null,
                  "address_state": null,
                  "address_zip": null,
                  "address_zip_check": null,
                  "brand": "Visa",
                  "country": "US",
                  "customer": null,
                  "cvc_check": null,
                  "dynamic_last4": null,
                  "exp_month": 8,
                  "exp_year": 2019,
                  "fingerprint": "DeJzO4rYW4SCmZ2V",
                  "funding": "credit",
                  "last4": "4242",
                  "metadata": {
                  },
                  "name": null,
                  "tokenization_method": null
                },
                "source_transfer": null,
                "statement_descriptor": null,
                "status": "succeeded",
                "transfer_group": null
              }
            }
          };

        // setup email data with unicode symbols
        let mailOptions = {
            from: '"Scoop Foundation Website" <do-not-reply@scoopfoundation.com>', // sender address
            to: 'FAKE@EMAIL.CA', // list of receivers
            subject: 'Scoop Foundation: Notification', // Subject line
            text: JSON.stringify(fakeText), // plain text body
            html: JSON.stringify(fakeText) // html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        });
    });
}

function webhooks (reqBody) {
    console.log(reqBody);
}



module.exports = email;

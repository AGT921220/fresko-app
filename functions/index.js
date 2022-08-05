/* eslint-disable promise/always-return */
const functions = require('firebase-functions');
const stripe = require('stripe')('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');
const cors = require('cors')({
    origin: true
});

exports.payWithStripe = functions.https.onRequest((request, response) => {
    // Set your secret key: remember to change this to your live secret key in production
    // See your keys here: https://dashboard.stripe.com/account/apikeys
    // eslint-disable-next-line promise/catch-or-return
    console.log('query', request.query.token);
    cors(request, response, () => {
        response.header('Content-Type', 'application/json');
        response.header('Access-Control-Allow-Origin', '*');
        response.header('Access-Control-Allow-Headers', 'Content-Type');

        //respond to CORS preflight requests
        if (request.method == 'OPTIONS') {
            response.status(204).send('');
        }


        stripe.charges.create({
                amount: request.query.amount,
                currency: request.query.currency,
                source: request.query.token,
                description: request.query.token
            }).then((charge) => {
                // asynchronously called
                response.send(charge);
            })
            .catch(err => {
                response.send(err);
                console.log(err);
            });
    });

});
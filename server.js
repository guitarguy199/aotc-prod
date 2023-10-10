require('dotenv').config();
const stripe = require('stripe')(process.env.REACT_APP_STRIPE_KEY_PRIVATE);
const mailchimpTx = require("@mailchimp/mailchimp_transactional")(process.env.REACT_APP_MC_TRANSACTIONAL_TEST)
const express = require('express');
const app = express();
app.use(express.static('public'));
const DOMAIN = 'http://localhost:3000';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: "price_1Nv1oECAeBcNtSOYvdKJvNRf",
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${DOMAIN}/success?success=true`,
    cancel_url: `${DOMAIN}/ai-training-for-realtors?canceled=true`,
    // automatic_tax: {enabled: true},
  });

  res.redirect(303, session.url);
});

const bodyParser = require('body-parser');
const endpointSecret = process.env.REACT_APP_STRIPE_WEBHOOK_SECRET;

const fulfillOrder = (lineItems) => {
  console.log("Fulfilling Order", lineItems)
}




// const message = {
//       from_email: "info@aheadofthecurvemedia.com",
//     subject: "Hello world",
//     text: "Welcome to Mailchimp Transactional!",
//     to: [
//       {
//         email: "austin@tangentapps.co",
//         type: "to"
//       }
//     ]
//   }



const getEmail = (emailaddr) => {
  console.log("Email: ", emailaddr);
}

app.post('/webhook', bodyParser.raw({type: 'application/json'}), async (request, response) => {
  const payload = request.body;
  const sig = request.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(payload, sig, endpointSecret)
  } catch (err) {
      return response.status(400).send(`Webhook error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
      event.data.object.id,
      // event.data.object.customer,
      {
        expand: ['line_items'],
      }

    );
    const lineItems = sessionWithLineItems.line_items;
    const emailId = sessionWithLineItems.customer_details.email;

  //   const message = {
  //   from_email: "info@aheadofthecurvemedia.com",
  //   subject: "Hello world",
  //   text: "Welcome to Mailchimp Transactional!",
  //   to: [
  //     {
  //       email: emailId,
  //       type: "to"
  //     }
  //   ]
  // }

  const run = async () => {

    const response = await mailchimpTx.messages.sendTemplate({
      template_name: 'testing',
      template_content: [
        {
          name: "testing",
          content: "testing",
        }
      ],
      message: {
        subject: "Testing Mailchimp Transactional",
        from_email: "info@aheadofthecurvemedia.com",
        to: [
          {
            email: emailId,
            type: "to"
          }
        ]
      }
    });
    console.log(response);
  }

    fulfillOrder(lineItems);
    getEmail(emailId);
    run();
  }

  response.status(200);
});

// app.get('/create-checkout-session', async (req, res) => {
//   let customer = {
//     price: req.query.price,
//     quantity: req.query.number,
//     page: req.query.page,
//     email: req.query.customer_details.email,
//   }

//   let successurl = 'http://localhost:3000/success' + customer.page + ''
//   let failedurl = 'http://localhost:3000/ai-training-for-realtors' + customer.page + ''
//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ['card'],
//     line_items: [
//       {
//         price_data: {
//           currency: 'usd',
//           product_data: {
//             name: 'Giveaway Entry',
//           },
//           unit_amount: customer.price,
//         },
//         quantity: customer.quantity,
//         customer_details: {
//           email: customer.email,
//         }
//       },
//     ],
//     mode: 'payment',
//     success_url: successurl,
//     cancel_url: failedurl,
//   });
//   // console.log(session)

//   res.redirect(303, session.url);
// });

app.listen(4242, () => console.log('Running on port 4242'));
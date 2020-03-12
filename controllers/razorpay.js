const Razorpay = require('razorpay');
require('dotenv').config();

const instance = new Razorpay({
  key_id: process.env.RZP_KEY_ID,
  key_secret: process.env.RZP_KEY_SECRET
});

//Create Order
exports.createorder = (req, res) => {
  const { amount, currency, receipt, payment_capture, notes } = req.params;
  instance.orders
    .create({ amount, currency, receipt, payment_capture, notes })
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      res.json(error);
    });
};

//Payment capture
exports.payment = (req, res) => {
  const payment_id = req.params;
  const amount = Number(req.params.amount * 100);
  instance.payments
    .capture(payment_id, amount)
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      res.json(error);
    });
};

//Refund
exports.refund = (req, res) => {
  const { payment_id } = req.params;
  instance.payments
    .refund(payment_id)
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      res.json(error);
    });
};

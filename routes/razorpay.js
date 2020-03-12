const express = require('express');
const router = express.Router();

const { requireSignin, isAuth } = require('../controllers/auth');
const { payment, refund, createorder } = require('../controllers/razorpay');

router.get('/v1/rzp_capture/:payment_id/:amount', payment);
router.get('v1/rzp_refunds/:payment_id', refund);
router.get('v1/orders', createorder);

module.exports = router;

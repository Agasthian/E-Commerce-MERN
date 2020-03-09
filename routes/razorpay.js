const express = require('express');
const router = express.Router();

const { requireSignin, isAuth } = require('../controllers/auth');
const { payment } = require('../controllers/auth');

router.get(
  '/api/v1/rzp_capture/:payment_id/:amount',
  requireSignin,
  isAuth,
  payment
);

module.exports = router;

const express = require('express');
const router = express.Router();

const { signup } = require('../controllers/user');
const { userSignUpValidator } = require('../validator');

router.post('/signup', userSignUpValidator, signup);

module.exports = router;


const {login} = require('../Controllers/authController')
const express = require('express');
const router = express.Router();

router.route('/')
    .post(login)


module.exports = router;
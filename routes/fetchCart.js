const express = require('express');
const router = express.Router();
const { User } = require('../models/user');

router.post('/', async (req, res) => {
    const email = req.body.email;
    let cart = await User.findOne({
        email: email
    })
    res.send(cart.cartItems);
})

module.exports = router;

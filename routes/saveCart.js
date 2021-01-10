const express = require('express');
const router = express.Router();
const { User } = require('../models/user');

router.post('/', async (req, res) => {
    const email = req.body.userEmail;
    const lastCart = req.body.cart;
    const filter = { email: email }
    const update = { cartItems: lastCart }
    let updatedCart = await User.findOneAndUpdate(filter, update, { new: true, useFindAndModify: false });
    res.send(updatedCart);
})


module.exports = router;
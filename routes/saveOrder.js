const express = require('express');
const router = express.Router();
const { User } = require('../models/user');

router.post('/', async (req, res) => {
    const email = req.body.email;
    const cart = req.body.orders;
    const total = req.body.totalcost;
    let datetime = new Date();
    const order = { cart, total, datetime };
    const filter = { email: email };
    const update = { $push: { orders: order }, $unset: { cartItems: [] } };
    let updatedRecord = await User.findOneAndUpdate(filter, update, { new: true, useFindAndModify: false });
    res.send(updatedRecord);
})

module.exports = router;
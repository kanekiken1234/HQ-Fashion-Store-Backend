const express = require('express');
const router = express.Router();
const { User, validateUser } = require('../models/user');
const jwt = require('jsonwebtoken');

router.post('/', async (req, res) => {

    const user = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password
    }
    const { error } = validateUser(req.body);
    if (error) return res.send(error);
    let existingUser = await User.findOne({
        email: req.body.email
    })
    if (existingUser) return res.send({ msg: "User already registered. Please Sign In", s: 404 });

    const record = new User(user);
    await record.save();
    const tokenDetails = {
        'email': record.email,
        'firstname': record.firstname,
    }
    const accessToken = jwt.sign(tokenDetails, process.env.JWT_SIGN);
    res.send(accessToken);
})

module.exports = router
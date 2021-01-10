const express = require('express');
const router = express.Router();
const { User, validateUser } = require('../models/user');

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

    res.send({ ...user, msg: "Account successfully created", s: 200 });
})

module.exports = router
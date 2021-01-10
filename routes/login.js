const express = require('express');
const { User } = require('../models/user');
const jwt = require('jsonwebtoken');
const router = express.Router();


router.post('/', async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    const user = await User.findOne({
        'email': email,
        'password': password,
    })
    if (!user) return res.send({ msg: "Invalid Credentials", s: 404 });
    const tokenDetails = {
        'email': user.email,
        'firstname': user.firstname,
    }
    const accessToken = jwt.sign(tokenDetails, process.env.JWT_SIGN);
    res.send(accessToken);
})

router.post('/auth', (req, res) => {
    const accessToken = req.body.accessToken;
    jwt.verify(accessToken, process.env.JWT_SIGN, (err, result) => {
        if (err) res.send("Authentication Failed, please Sign In again");
        const user = jwt.decode(accessToken);
        res.send(user);
    })
})



module.exports = router;
const Joi = require('joi');
const mongoose = require('mongoose');


const User = mongoose.model('User', new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        maxlength: 50
    },
    lastname: {
        type: String,
        required: true,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        maxlength: 1024
    },
    cartItems: {
        type: [mongoose.Schema.Types.Mixed],
    },
    orders: {
        type: [mongoose.Schema.Types.Mixed]
    }
}));

function validateUser(user) {
    const schema = Joi.object({
        firstname: Joi.string().max(50).required(),
        lastname: Joi.string().max(50).required(),
        email: Joi.string().max(255).required().email(),
        password: Joi.string().max(255).required(),
    })
    return schema.validate(user);
}

module.exports.User = User;
module.exports.validateUser = validateUser;
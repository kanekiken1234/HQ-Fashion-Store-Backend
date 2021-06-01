const express = require('express');
const app = express();
const db = require('./models/dbConnection');
const mongoose = require('mongoose');
const mensShirts = require('./routes/MensWear');
const womensShirts = require('./routes/WomensWear');
const login = require('./routes/login');
const users = require('./routes/users');
const saveCart = require('./routes/saveCart');
const cors = require('cors');
const bodyParser = require('body-parser');
const saveOrder = require('./routes/saveOrder');
const fetchCart = require('./routes/fetchCart');
const profile = require('./routes/profile');
require('dotenv').config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
    {
        extended: true
    }
));

// var corsOptions = {
//     origin: 'http:localhost:3000',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

app.use(cors());
app.use('/mens', mensShirts);
app.use('/womens', womensShirts);
app.use('/users', users);
app.use('/login', login);
app.use('/fetchCart', fetchCart);
app.use('/saveCart', saveCart);
app.use('/saveOrder', saveOrder);
app.use('/profile', profile);


mongoose.connect('mongodb+srv://HQ-DB_USER:pub97Y69AltcAE3N@cluster0.l3dbx.mongodb.net/Products?retryWrites=true&w=majority')
    .then(() => {
        console.log('Successful Connection');
    })
    .catch((err) => {
        console.log(err);
    })

app.get('/', async (req, res) => {
    const faccessories = db.fetchAFeatured();
    const fclothing = db.fetchCfeatured();
    const fcDataRaw = await fclothing.find({}, "data");
    const fcData = fcDataRaw.map(each => {
        return {
            key: each._id,
            id: each.data.id,
            p: each.data.price,
            n: each.data.productDisplayName,
            imgFront: each.data.styleImages.default.resolutions,
            imgBack: each.data.styleImages.back.resolutions,
            imgLeft: each.data.styleImages.left.resolutions,
            imgRigh: each.data.styleImages.right.resolutions,
            prodDescription: each.data.productDescriptors.description.value
        }
    });

    const faDataRaw = await faccessories.find({}, "data");
    const faData = faDataRaw.map(each => {
        return {
            key: each._id,
            id: each.data.id,
            p: each.data.price,
            n: each.data.productDisplayName,
            imgFront: each.data.styleImages.default.resolutions,
            imgBack: each.data.styleImages.back.resolutions,
            imgLeft: each.data.styleImages.left.resolutions,
            imgRigh: each.data.styleImages.right.resolutions,
            prodDescription: each.data.productDescriptors.description.value
        }
    })

    res.send({
        fc: fcData,
        fa: faData
    });
})



app.listen(process.env.PORT || 5000, () => {
    console.log("Listning...");
});





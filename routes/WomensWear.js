const express = require('express');
const router = express.Router();
const db = require('../models/dbConnection');
const cors = require('cors');

router.use(cors());

router.get('/shirts', async (req, res) => {
    const womenShirts = db.fetchWWearShirts();
    const wsRaw = await womenShirts.find({}, "data");
    const ws = wsRaw.map(each => {
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

    res.send(ws);
});

router.get('/tshirts', async (req, res) => {
    const womenTShirts = db.fetchWWearTShirts();
    const wtsRaw = await womenTShirts.find({}, "data");
    const wts = wtsRaw.map(each => {
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

    res.send(wts);
});

router.get('/pantsAndTrousers', async (req, res) => {
    const womenPants = db.fetchWWearPants();
    const wpRaw = await womenPants.find({}, "data");
    const wp = wpRaw.map(each => {
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

    res.send(wp);
});

module.exports = router;
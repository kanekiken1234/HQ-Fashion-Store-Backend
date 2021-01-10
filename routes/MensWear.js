const express = require('express');
const router = express.Router();
const db = require('../models/dbConnection');
const cors = require('cors');


router.use(cors());

router.get('/shirts', async (req, res) => {
    const mensShirts = db.fetchMWearShirts();
    const msRaw = await mensShirts.find({}, "data");
    const ms = msRaw.map(each => {
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

    res.send(ms);
});

router.get('/tshirts', async (req, res) => {
    const mensTShirts = db.fetchMWearTShirts();
    const mtsRaw = await mensTShirts.find({},"data");
    const mts = mtsRaw.map(each => {
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

    res.send(mts);
})

router.get('/pantsAndTrousers', async (req,res) =>{
    const pantsAndTs = db.fetchMWearPants();
    const ptRaw = await pantsAndTs.find({},"data");
    const pt = ptRaw.map(each => {
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
    res.send(pt);
})



module.exports = router;
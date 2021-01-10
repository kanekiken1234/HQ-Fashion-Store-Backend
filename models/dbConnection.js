const mongoose = require('mongoose');

const obj_struct = {
    data: mongoose.Schema.Types.Mixed,
    meta: mongoose.Schema.Types.Mixed,
    notification: mongoose.Schema.Types.Mixed
}

let AFeatured = null;
let CFeatured = null;
let MWearPants = null;
let MWearShirts = null;
let MWearTShirts = null;
let WWearShirts = null;
let WWearTShirts = null;
let WWearPants = null;

const fetchAFeatured = () => {
    if (!AFeatured) {
        AFeatured = mongoose.model('Featured.Accessories', new mongoose.Schema(obj_struct, { collection: 'Featured.Accessories' }));
    }
    return AFeatured;
}

const fetchCfeatured = () => {
    if (!CFeatured) {
        CFeatured = mongoose.model('Featured.Clothing', new mongoose.Schema(obj_struct, { collection: 'Featured.Clothing' }));
    }
    return CFeatured;
}

const fetchMWearShirts = () => {
    if (!MWearShirts) {
        MWearShirts = mongoose.model('MensWear.Shirt', new mongoose.Schema(obj_struct, { collection: 'MensWear.Shirt' }));
    }
    return MWearShirts;
}

const fetchMWearTShirts = () => {
    if (!MWearTShirts) {
        MWearTShirts = mongoose.model('MensWear.TShirts', new mongoose.Schema(obj_struct, { collection: 'MensWear.TShirts' }));
    }
    return MWearTShirts;
}

const fetchMWearPants = () => {
    if (!MWearPants) {
        MWearPants = mongoose.model('MensWear.PandT', new mongoose.Schema(obj_struct, { collection: 'MensWear.PandT' }));
    }
    return MWearPants;
}

const fetchWWearShirts = () => {
    if (!WWearShirts) {
        WWearShirts = mongoose.model('WomensWear.Shirt', new mongoose.Schema(obj_struct, { collection: 'WomensWear.Shirt' }));
    }
    return WWearShirts;
}

const fetchWWearTShirts = () => {
    if (!WWearTShirts) {
        WWearTShirts = mongoose.model('WomensWear.TShirts', new mongoose.Schema(obj_struct, { collection: 'WomensWear.TShirts' }));
    }
    return WWearTShirts;
}

const fetchWWearPants = () => {
    if (!WWearPants) {
        WWearPants = mongoose.model('WomensWear.PandT', new mongoose.Schema(obj_struct, { collection: 'WomensWear.PandT' }));
    }
    return WWearPants;
}


module.exports.fetchAFeatured = fetchAFeatured;
module.exports.fetchCfeatured = fetchCfeatured;
module.exports.fetchMWearShirts = fetchMWearShirts;
module.exports.fetchMWearTShirts = fetchMWearTShirts;
module.exports.fetchMWearPants = fetchMWearPants;
module.exports.fetchWWearShirts = fetchWWearShirts;
module.exports.fetchWWearTShirts = fetchWWearTShirts;
module.exports.fetchWWearPants = fetchWWearPants;
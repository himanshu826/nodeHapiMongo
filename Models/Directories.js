
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let Config = require('../Config');

let Directories = new Schema({
    name: {
        en: { type: String, trim: true, index: true },
        ar: { type: String, trim: true, index: true },
    },
    image: {
        original: { type: String, default: "" },
        thumbnail: { type: String, default: "" },
    },
    urls: {
        en: { type: String, default: "" },
        ar: { type: String, default: "" },
    },
    isBlocked: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
    createdAt: { type: Date },
    updatedAt: { type: Date }
});

module.exports = mongoose.model('Directories', Directories);

let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let Config = require('../Config');

let Channels = new Schema({
    name: { type: String, trim: true, index: true },
    image: {
        original: { type: String, default: "" },
        thumbnail: { type: String, default: "" },
    },
    isBlocked: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
    priority: { type: Number, default: 0, sparse: true },
    createdAt: { type: Date },
    updatedAt: { type: Date }
});

module.exports = mongoose.model('Channels', Channels);
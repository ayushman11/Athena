const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clubSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    council: [{
        type: String,
        required: true,
    }],
    description: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String
    }
}, {timestamps: true});

const Club = mongoose.model('Club', clubSchema);
module.exports = Club;
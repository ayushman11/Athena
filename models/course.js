const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    cover: {
        type: String,
    },
    authors: [{
        name: {
            type: String
        },
        position: {
            type: String
        }
    }],
    short_description: {
        type: String,
        required: true,
    },
    playlist: [{
        title: {
            type: String,
        },
        link: {
            type:String,
        },
        thumbnail: {
            type: String
        },
        description: {
            type: String,
        },
    }],
}, {timestamps: true});

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
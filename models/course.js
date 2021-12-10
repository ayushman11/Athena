const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    authors: [{
        name: {
            type: String
        },
        position: {
            type: String
        }
    }],
    thumbnail: {
        type: String
    },
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
        comments: [{
            // author: {
            //     type: String
            // },
            body: {
                type: String
            }
        }],
    }],
}, {timestamps: true});

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
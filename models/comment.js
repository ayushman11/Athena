const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    video_id: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
}, {timestamps: true});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
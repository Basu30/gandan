const mongoose = require('mongoose');

const Schema = mongoose.Schema

const postSchema = new Schema({
    title: { type: String },
    content: { type: String, required: true},
    image: { type: String},
    creator: { type: mongoose.Types.ObjectId, required: true, ref: 'User'}
});

module.exports = mongoose.model('Post', postSchema)
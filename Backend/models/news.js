const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const newsSchema = new Schema({
    title: { type: String, required: true },
    image: { type: String, required: true }, // to store actual image is not good idea. Instead of image save url of image.
    url: { type: String, required: true },
    content: { type: String, required: true },
})

module.exports = mongoose.model('News', newsSchema);
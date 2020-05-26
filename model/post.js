
const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({

    title: {
        type: String
    },
    article: {
        type: String
    },

    createdAt: {
        type: Date,
        default: Date.now()
    }
});


module.exports = mongoose.model('POST', postSchema);
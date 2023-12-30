const mongoose = require('mongoose')


const classSchema = mongoose.Schema({

    className: {
        type: String,
    },
    section: {
        type: String,
        uppercase: true

    },
    subject: {
        type: String,
    },
    classCode: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: [true, "Please provide a name for this product."],
    },

    imageURLs: {
        type: String,
    },

}, {
    timestamps: true,
});

const Class = mongoose.model('classList', classSchema)

module.exports = Class;
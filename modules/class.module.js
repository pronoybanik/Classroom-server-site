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
        
    },

    email: {
        type: String,
        required: [true, "Please provide a name for this product."],
    },

    imageURLs: {
        type: String,
    },
    classRole: {
        type: String,
        enum: ["student", "teacher"],
        default: "student"

    }

}, {
    timestamps: true,
});

const Class = mongoose.model('classList', classSchema)

module.exports = Class;
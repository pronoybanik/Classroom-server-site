const mongoose = require('mongoose')


const userInfoSchema = mongoose.Schema({

    email: {
        type: String,
        required: [true, "Please provide a name for this product."],
    },

    password: {
        type: String,
        required: true
    },

}, {
    timestamps: true,
});

const UserInfo = mongoose.model('UserInfo', userInfoSchema)

module.exports = UserInfo;
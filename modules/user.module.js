const mongoose = require('mongoose')


const userInfoSchema = mongoose.Schema({

    email: {
        type: String,
        required: [true, "Please provide a name for this product."],
    },
    name: {
        type: String
    },
    password: {
        type: String,
        default: null
    },

    userRole: {
        type: String,
        enum: ["student", "teacher", "admin"],
        default: "student",
    },

}, {
    timestamps: true,
});

const UserInfo = mongoose.model('UserInfo', userInfoSchema)

module.exports = UserInfo;
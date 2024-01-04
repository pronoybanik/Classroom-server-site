const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const chatSchema = mongoose.Schema({
    name: {
        type: String
    },
    image: {
        type: String
    },
    chatValue: {
        type: String
    },
    assignmentId: {
        type: ObjectId
    },
    classId: {
        type: ObjectId
    },
   

});

const Chat = mongoose.model("chatInfo", chatSchema);

module.exports = Chat;

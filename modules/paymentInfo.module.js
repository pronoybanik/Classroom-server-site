const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const paymentInfo = mongoose.Schema({
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

const Payment = mongoose.model("paymentInfo", paymentInfo);

module.exports = Payment;

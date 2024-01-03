const mongoose = require("mongoose")
const { ObjectId } = mongoose.Schema.Types;

const assignmentSchema = mongoose.Schema({
    classListId: {
        type: ObjectId,
    },
    email: {
        type: String,
        require: true
    },
    title: {
        type: String
    },
    instructions: {
        type: String
    },
    imageValue: {
        type: String,
    },
    pdfValue: {
        type: String,
    },
    name: {
        type: String,
    },
    currentDate: {
        type: String
    },
});

const Assignment = mongoose.model("assignmentData", assignmentSchema);

module.exports = Assignment;
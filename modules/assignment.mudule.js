const mongoose = require("mongoose")

const assignmentSchema = mongoose.Schema({

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
    }

})

const Assignment = mongoose.model("assignmentData", assignmentSchema);

module.exports = Assignment;
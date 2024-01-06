const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types;

const classSchema = mongoose.Schema({
    teacherId: {
        type: ObjectId
    },
    studentImage: {
        type: String,
    },
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
        required: [true, "Please provide an email address."],
    },
    teacherName: {
        type: String,
    },
    teacherImage: {
        type: String,
    },
    classRole: {
        type: String,
        enum: ["student", "teacher"],
        default: "student",
    },
    classWork: [
        {
            type: ObjectId,
            ref: "assignmentData"
        }
    ],
    studentList: [
        {
            type: ObjectId,
            ref: "classList"
        }
    ],
    currentDate: {
        type: String,
    },
    groupChat: [{
        type: ObjectId,
        ref: "chatInfo"
    }]
});

const Class = mongoose.model('classList', classSchema)

module.exports = Class;
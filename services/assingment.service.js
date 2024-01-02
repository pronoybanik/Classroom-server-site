const Assignment = require("../modules/assignment.mudule");

exports.createAssignmentService = async (data) => {
    const classData = await Assignment.create(data);
    return classData;
};


exports.getAllAssignmentService = async () => {
    const classData = await Assignment.find({});
    return classData;
};




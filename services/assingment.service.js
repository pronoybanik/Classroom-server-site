const Assignment = require("../modules/assignment.mudule");
const Class = require("../modules/class.module");

exports.createAssignmentService = async (data) => {
    const result = await Assignment.create(data);
    const { _id: assignmentId, classListId } = result;
    await Class.updateOne(
        { _id: classListId },
        { $push: { classWork: assignmentId } }
    );
    return result;
};


exports.getAllAssignmentService = async () => {
    const result = await Assignment.find({});
    return result;
};
exports.getAssignmentByIdService = async (id) => {
    const result = await Assignment.findOne({ _id: id });
    return result;
};




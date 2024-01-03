const Class = require("../modules/class.module");

exports.createClassService = async (data) => {
    const classData = await Class.create(data);
    const { teacherId, _id: id } = classData;
    await Class.updateOne(
        { _id: teacherId },
        { $push: { studentList: id } }
    );
    return classData;
};

exports.getAllClassService = async () => {
    const classData = await Class.find({}).populate("classWork").populate("studentList");
    return classData;
};

exports.getClassByIdService = async (id) => {
    ref: "classList"
    const store = await Class.findOne({ _id: id }).populate("classWork").populate("studentList");
    return store;
};


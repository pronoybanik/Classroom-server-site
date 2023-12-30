const Class = require("../modules/class.module");

exports.createClassService = async (data) => {
    const classData = await Class.create(data);
    return classData;
};

exports.getAllClassService = async () => {
    const classData = await Class.find({});
    return classData;
};

exports.getClassByIdService = async (id) => {
    const store = await Class.findOne({ _id: id })
    return store;
};
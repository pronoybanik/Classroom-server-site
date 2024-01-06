const UserInfo = require("../modules/user.module");

exports.SaveUserInfoService = async (data) => {
    const classData = await UserInfo.create(data);
    return classData;
};

exports.getAllUserService = async () => {
    const classData = await UserInfo.find({});
    return classData;
};
exports.getEmailUserService = async (data) => {
    const classData = await UserInfo.findOne({ email: data });
    return classData;
};
exports.getIdUserService = async (id) => {
    const classData = await UserInfo.findOne({ _id: id });
    return classData;
};




const UserInfo = require("../modules/user.module");

exports.SaveUserInfoService = async (data) => {
    const classData = await UserInfo.create(data);
    return classData;
};

exports.getAllUserService = async () => {
    const classData = await UserInfo.find({});
    return classData;
};




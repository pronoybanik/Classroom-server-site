const UserInfo = require("../modules/user.module");

exports.SaveUserInfoService = async (data) => {
    const userData = await UserInfo.create(data);
    return userData;
};

exports.getAllUserService = async () => {
    const userData = await UserInfo.find({});
    return userData;
};
exports.getEmailUserService = async (data) => {
    const userData = await UserInfo.findOne({ email: data });
    return userData;
};
exports.getIdUserService = async (id) => {
    const userData = await UserInfo.findOne({ _id: id });
    return userData;
};
exports.deleteUserByIdService = async (id) => {
    const userData = await UserInfo.deleteOne({ _id: id });
    return userData;
};




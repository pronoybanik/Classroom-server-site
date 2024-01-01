const { SaveUserInfoService, getAllUserService } = require("../services/userInfo.service");

exports.SaveUserInfo = async (req, res) => {
    try {
        // save or create
        const data = await SaveUserInfoService(req.body);

        res.status(200).json({
            status: "success",
            message: "Data inserted successfully!",
            data: data
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: " Data is not inserted ",
            error: error.message,
        });
    }
};

exports.allUser = async (req, res) => {
    try {
        // save or create
        const data = await getAllUserService();

        res.status(200).json({
            status: "success",
            message: " get user successfully!",
            data: data
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: " Data can not fetch",
            error: error.message,
        });
    }
};



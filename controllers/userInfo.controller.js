const { SaveUserInfoService, getAllUserService, getEmailUserService, getIdUserService, deleteUserByIdService } = require("../services/userInfo.service");

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

exports.getEmailUser = async (req, res) => {
    try {
        const email = req.params.email;
        const data = await getEmailUserService(email);

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

exports.getIdUser = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await getIdUserService(id);

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

exports.deleteUserById = async (req, res) => {
    try {
        const id = req.params.id;
        await deleteUserByIdService(id);

        res.status(200).json({
            status: "success",
            message: "Delete user successfully!",
        });

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "user is Not Delete",
            error: error.message,
        });
    }
};



const { createChatService, getChatService } = require("../services/chat.service");

exports.createChat = async (req, res) => {
    try {
        // save or create
        const data = await createChatService(req.body);

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
exports.getAllChat = async (req, res) => {
    try {
        // save or create
        const data = await getChatService(req.body);

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
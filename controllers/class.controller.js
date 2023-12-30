const { createClassService, getAllClassService, getClassByIdService } = require("../services/class.service");

exports.createClass = async (req, res) => {
    try {
        // save or create
        const data = await createClassService(req.body);

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

exports.getAllClass = async (req, res) => {
    try {
        // save or create
        const data = await getAllClassService();

        res.status(200).json({
            status: "success",
            message: "Data get successfully!",
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

exports.getClassById = async (req, res) => {
    const { id } = req.params;

    try {
        const stock = await getClassByIdService(id);

        res.status(200).json({
            status: "success",
            data: stock,
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "Can't get the store",
            error: error.message,
        });
    }
};


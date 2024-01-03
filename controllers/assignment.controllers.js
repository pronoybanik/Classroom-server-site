const { getAllAssignmentService, createAssignmentService, getAssignmentByIdService } = require("../services/assingment.service");

exports.createAssignment = async (req, res) => {
    try {
        // save or create
        const data = await createAssignmentService(req.body);

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

exports.getAllAssignment = async (req, res) => {
    try {
        // save or create
        const data = await getAllAssignmentService();

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

exports.getAssignmentById = async (req, res) => {
    const { id } = req.params;

    try {
        const stock = await getAssignmentByIdService(id);

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

// exports.setPdf = async (req, res) => {
//     try {
//         console.log(req.file);
//         const filePath = req.file.filename;
//         res.status(200).json({
//             status: "success",
//             message: "Data inserted successfully!",
//             data: filePath
//         });
//     } catch (error) {
//         res.status(400).json({
//             status: "fail",
//             message: " Data is not inserted",
//             error: error.message,
//         });
//     }
// };

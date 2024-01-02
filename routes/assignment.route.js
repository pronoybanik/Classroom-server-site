const express = require('express')
const { getAllAssignment, createAssignment, setPdf } = require("../controllers/assignment.controllers");
// const multer = require('multer');
const router = express.Router();


// Multer code..
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, '../pdfFiles')
//     },
//     filename: function (req, file, cb) {
//         const uniqueSuffix = Date.now()
//         cb(null, uniqueSuffix + file.originalname)
//     }
// })
// const upload = multer({ storage: storage })


router.route("/").get(getAllAssignment).post(createAssignment);

// router.route("/upload-file", upload.single("file")).post(setPdf);

module.exports = router
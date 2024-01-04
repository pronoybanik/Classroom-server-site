const express = require('express')
const { getAllAssignment, createAssignment,  getAssignmentById, updateAssignmentById } = require("../controllers/assignment.controllers");
const router = express.Router();





router.route("/").get(getAllAssignment).post(createAssignment);

router.route("/:id").get(getAssignmentById).patch(updateAssignmentById)

module.exports = router
const express = require('express')
const { getAllAssignment, createAssignment,  getAssignmentById, updateAssignmentById, deleteAssignmentById } = require("../controllers/assignment.controllers");
const router = express.Router();





router.route("/").get(getAllAssignment).post(createAssignment);

router.route("/:id").get(getAssignmentById).patch(updateAssignmentById).delete(deleteAssignmentById)

module.exports = router
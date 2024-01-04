const express = require('express');
const { createChat, getAllChat } = require('../controllers/chat.controller');
const router = express.Router();

router.route("/").get(getAllChat).post(createChat);

// router.route("/:id").get(getAssignmentById).patch(updateAssignmentById)


module.exports = router
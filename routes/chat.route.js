const express = require('express');
const { createChat, getAllChat, getChatById } = require('../controllers/chat.controller');
const router = express.Router();

router.route("/").get(getAllChat).post(createChat);

router.route("/:id").get(getChatById)


module.exports = router
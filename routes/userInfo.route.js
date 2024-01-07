const express = require('express')
const router = express.Router()
const { allUser, SaveUserInfo, getEmailUser, getIdUser, deleteUserById } = require('../controllers/userInfo.controller')




router.route('/')
.get(allUser)
.post(SaveUserInfo);

router.route("/email/:email").get(getEmailUser);

router.route("/:id").get(getIdUser).delete(deleteUserById);

module.exports = router
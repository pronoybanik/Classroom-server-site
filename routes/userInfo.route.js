const express = require('express')
const router = express.Router()
const { allUser, SaveUserInfo, getEmailUser, getIdUser } = require('../controllers/userInfo.controller')



router.route('/')
    .get(allUser)
    .post(SaveUserInfo);

router.route("/email/:email").get(getEmailUser);
router.route("/:id").get(getIdUser);


module.exports = router
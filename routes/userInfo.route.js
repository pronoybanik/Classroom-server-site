const express = require('express')
const router = express.Router()
const { allUser, SaveUserInfo } = require('../controllers/userInfo.controller')



router.route('/')
    .get(allUser)
    .post(SaveUserInfo)




module.exports = router
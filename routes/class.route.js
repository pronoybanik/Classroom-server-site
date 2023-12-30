const express = require('express')
const { createClass, getAllClass, getClassById } = require('../controllers/class.controller')
const router = express.Router()



router.route('/')
    .get(getAllClass)
    .post(createClass)

router.route("/:id")
    .get(getClassById)


module.exports = router
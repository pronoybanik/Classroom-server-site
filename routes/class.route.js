const express = require('express')
const { createClass, getAllClass, getClassById, deleteClassListById } = require('../controllers/class.controller')
const router = express.Router()



router.route('/')
    .get(getAllClass)
    .post(createClass)

router.route("/:id")
    .get(getClassById)
    .delete(deleteClassListById)


module.exports = router
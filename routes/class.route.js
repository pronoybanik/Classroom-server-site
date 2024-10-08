const express = require('express')
const { createClass, getAllClass, getClassById, deleteClassListById, updatePresentById, updateAbsentById } = require('../controllers/class.controller')
const router = express.Router()



router.route('/')
    .get(getAllClass)
    .post(createClass)

router.route("/:id")
    .get(getClassById)
    // .patch(updatePresentById)
    .delete(deleteClassListById)

router.route("/present/:id").patch(updatePresentById)
router.route("/absent/:id").patch(updateAbsentById)


module.exports = router
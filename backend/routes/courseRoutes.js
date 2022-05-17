const express = require('express')
const router = express.Router()
const { getCourses, setCourse, updateCourse, deleteCourse } = require('../controllers/courseController') 

router.route('/').get(getCourses).post(setCourse)
router.route('/:id').delete(deleteCourse).put(updateCourse)

module.exports = router


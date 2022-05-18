const asyncHandler = require('express-async-handler')

const Course = require('../models/courseModel')

// @desc Get courses
// @route GET /api/goals
// @access Private

const getCourses = asyncHandler(async(req, res) => {
    const courses = await Course.find()

    res.status(200).json(courses)
})

// @desc Set course
// @route POST /api/goals
// @access Private

const setCourse = asyncHandler(async(req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const course = await Course.create({
        text: req.body.text
    })

    res.status(200).json(course)
})

// @desc Update course
// @route PUT /api/goals/id
// @access Private

const updateCourse = asyncHandler(async(req, res) => {
    const course = await Course.findById(req.params.id)

    if(!course) {
        res.status(400)
        throw new Error('Course not found')
    }

    const updatedCourse = await Course.findByIdAndUpdate(req.params.id,
        req.body, {
            new: true,
        })

    res.status(200).json(updatedCourse)
})

// @desc Delete course
// @route DELETE /api/goals/id
// @access Private

const deleteCourse = asyncHandler(async(req, res) => {
    const course = await Course.findById(req.params.id)

    if(!course) {
        res.status(400)
        throw new Error('Course not foun')
    }

    await course.remove()

    res.status(200).json({ id: req.params.id })
})


module.exports = {
    getCourses,
    setCourse,
    updateCourse,
    deleteCourse,
}
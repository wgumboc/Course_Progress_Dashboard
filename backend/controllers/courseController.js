const asyncHandler = require('express-async-handler')

// @desc Get courses
// @route GET /api/goals
// @access Private

const getCourses = asyncHandler(async(req, res) => {
    res.status(200).json({message: 'Get courses'})
})

// @desc Set course
// @route POST /api/goals
// @access Private

const setCourse = asyncHandler(async(req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({message: 'Set course'})
})

// @desc Update course
// @route PUT /api/goals/id
// @access Private

const updateCourse = asyncHandler(async(req, res) => {
    res.status(200).json({message: `Update course ${req.params.id}`})
})

// @desc Delete course
// @route DELETE /api/goals/id
// @access Private

const deleteCourse = asyncHandler(async(req, res) => {
    res.status(200).json({message: `Delete course ${req.params.id}`})
})


module.exports = {
    getCourses,
    setCourse,
    updateCourse,
    deleteCourse,
}
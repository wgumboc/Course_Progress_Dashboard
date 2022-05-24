const asyncHandler = require('express-async-handler')

const Course = require('../models/courseModel')
const User = require('../models/userModel')

// @desc Get courses
// @route GET /api/goals
// @access Private

const getCourses = asyncHandler(async(req, res) => {
    const courses = await Course.find({ user: req.user.id })

    res.status(200).json(courses)
})

// @desc Set course
// @route POST /api/goals
// @access Private

const setCourse = asyncHandler(async(req, res) => {
  const { text, assessmentList } = req.body

  console.log(req.body)
  console.log(text)
  console.log(assessmentList)

  if(!text || !assessmentList) {
      res.status(400)
      throw new Error('Please add all fields')
  }

  const course = await Course.create({
      text: req.body.text,
      user: req.user.id,
      assessmentList: req.body.assessmentList
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

    // Check for user
    if(!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the goal user
    if(goal.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
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

    // Check for user
    if(!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the goal user
    if(goal.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
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
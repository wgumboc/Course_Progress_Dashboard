const mongoose = require('mongoose')

const courseSchema = mongoose.Schema(
{
    user: {
        type: mongoose.Schema.Types.ObjectId,
        requires: true,
        ref: 'User'
    },
    text: {
      type: String,
      required: [true, 'Please add a text value']
    },
    assessmentList: {
      type: Array,
      required: [true, 'Please add assessments']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Course', courseSchema)
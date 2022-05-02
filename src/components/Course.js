import React from 'react'

const Course = ({course}) => {
  return (
    <div className = 'course accordion'>
      <button type='button' class='accordion__button'>Input Grades</button>
        <h3>{course.text}</h3>
        <p>{course.day}</p>
    </div>
  )
}

export default Course
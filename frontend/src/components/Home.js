import React from 'react'
import { useState } from 'react'
import Header from '../components/Header'
import Button from '../components/Button'
import CourseList from '../components/CourseList'
import AddCourse from '../components/AddCourse'
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"


const Home = () => {
    
    const navigate = useNavigate()

    const {user} = useSelector((state) => state.auth)
    
    useEffect(() => {
      if(!user) {
        navigate('/login')
      }
    }, [user, navigate])
  
    const [showAddCourse, setShowAddCourse] = useState(false)

    const [courses, setCourses] = useState([
        {
            id: 1,
            text: 'CPSC 213',
            assessmentList: [{assessment: 'Assignments', 
                              percent: '21'},
                              {assessment: 'Labs', 
                              percent: '1'},
                              {assessment: 'Clickers', 
                              percent: '1'},
                              {assessment: 'Midterm', 
                              percent: '22'},
                              {assessment: 'Final', 
                              percent: '45'}]
        },
        {
            id: 2,
            text: 'CPSC 221',
            assessmentList: [{assessment: 'Examlets', 
                             percent: '45'}, 
                             {assessment: 'Labs', 
                             percent: '9'},
                             {assessment: 'Homework', 
                             percent: '12'},
                             {assessment: 'PAs', 
                             percent: '12'},
                             {assessment: 'Final Exam', 
                             percent: '22'}]
        },
        {
            id: 3,
            text: 'DSCI 100',
            assessmentList: [{assessment: 'Quiz 1', 
                              percent: '20'},
                              {assessment: 'Quiz 2', 
                              percent: '20'},
                              {assessment: 'Quiz 3', 
                              percent: '20'},
                              {assessment: 'Worksheets', 
                              percent: '6'},
                              {assessment: 'Tutorials', 
                              percent: '14'},
                              {assessment: 'Project', 
                              percent: '20'},]
        },
        {
            id: 4,
            text: 'ECON 323',
            assessmentList: [{assessment: 'Assignments', 
                              percent: '45'},
                             {assessment: 'Final Project', 
                              percent: '50'},
                             {assessment: 'Participation', 
                              percent: '5'}]
        }
      ])
  
    const addCourse = (course) => {
  
      const id = Math.floor(Math.random() * 10000)
  
      const newCourse = {id, ...course}
      setCourses([...courses, newCourse])
  
      console.log(courses)
  
    }
  
    const deleteCourse = (id) => {
        setCourses(courses.filter((course) => course.id !== id))
    }
  

  return (
    <>
      <div className = "container">

          <Header title = "Course Progress Tracker"/>

          {showAddCourse &&
            <AddCourse onAdd={addCourse} />
          }
          
          <Button color = {showAddCourse ? 'rgb(255, 163, 143)' : 'rgb(41, 97, 153)'}
                  text = {showAddCourse ? 'Collapse' : 'Add Course'} 
                  onClick = {() => setShowAddCourse(!showAddCourse)} />

          <CourseList courses = {courses} deleteCourse = {deleteCourse} />
          
      </div>
    </>
  )
}

export default Home
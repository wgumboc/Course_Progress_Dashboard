import React from 'react'
import { useState } from 'react'
import Header from '../components/Header'
import Button from '../components/Button'
import Course from '../components/Course'
import AddCourse from '../components/AddCourse'
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import Spinner from '../components/Spinner'
import {getCourses, reset} from '../features/courses/courseSlice'


const Home = () => {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user} = useSelector((state) => state.auth)
    const {courses, isLoading, isError, message} = useSelector((state) =>
    state.course)
    
    useEffect(() => {
      if(isError) {
        console.log(message)
      }

      if(!user) {
        navigate('/login')
      }

      dispatch(getCourses())

      return () => {
        dispatch(reset())
      }
    }, [user, navigate])
  
    const [showAddCourse, setShowAddCourse] = useState(false)

    const [allCourses, setCourses] = useState([
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
        }
      ])
  
    const addCourse = (course) => {
  
      const id = Math.floor(Math.random() * 10000)
  
      const newCourse = {id, ...course}
      setCourses([...allCourses, newCourse])
  
  
    }
  
    const deleteCourse = (id) => {
        setCourses(allCourses.filter((course) => course.id !== id))
    }
  
    if(isLoading){
      return <Spinner />
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

          {courses.length > 0 ? ( 
            <>
            {courses.map((course) => (<Course key={course.id} course={course}/>))}
            </>
          ) : (
               <h2>No courses found</h2> 
          )}

          
      </div>
    </>
  )
}

export default Home
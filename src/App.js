import Header from './components/Header'
import Button from './components/Button'
import CourseList from './components/CourseList'
import { useState } from 'react'
import AddCourse from './components/AddCourse'
//import { FaTasks } from 'react-icons/fa'

function App() {

  const [showAddCourse, setShowAddCourse] = useState(false)

  const [courses, setCourses] = useState([
    {
        id: 1,
        text: 'CPSC 213',
        assessmentList: [{assessment: 'Final', 
                          percent: '15'}]
    },
    {
        id: 2,
        text: 'CPSC 221',
        assessmentList: [{assessment: 'Midterm 1', 
                         percent: '14'}]
    },
    {
        id: 3,
        text: 'DSCI 100',
        assessmentList: [{assessment: 'Midterm 2', 
                          percent: '13'}]
    },
    {
        id: 4,
        text: 'ECON 323',
        assessmentList: [{assessment: 'Assignments', 
                          percent: '12'}]
    }
  ])

  const addCourse = (course) => {

    const id = Math.floor(Math.random() * 10000)

    const newCourse = {id, ...course}
    setCourses([...courses, newCourse])

    console.log(courses)

  }

  return (
    <div className = "container">
      <Header title = "Weighted Average Calculator"/>

      {showAddCourse &&
        <AddCourse onAdd={addCourse} />
      }

      <Button color = {showAddCourse ? 'rgb(255, 163, 143)' : 'rgb(41, 97, 153)'}
              text = {showAddCourse ? 'Collapse Form' : 'Add Course'} 
              onClick = {() => setShowAddCourse(!showAddCourse)} />

      <CourseList courses = {courses} />
    </div>
  );
}

export default App;

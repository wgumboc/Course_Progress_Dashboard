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
        grade: 'Current Grade: 70%',
        reminder: true, 
    },
    {
        id: 2,
        text: 'CPSC 221',
        grade: 'Current Grade: 80%',
        reminder: true, 
    },
    {
        id: 3,
        text: 'DSCI 100',
        grade: 'Current Grade: 90%',
        reminder: false, 
    },
    {
        id: 4,
        text: 'ECON 323',
        grade: 'Current Grade: 100%',
        reminder: false,
    }
  ])

  const addCourse = (course) => {

    const id = Math.floor(Math.random() * 10000)

    const newCourse = {id, ...course}
    setCourses([...courses, newCourse])

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

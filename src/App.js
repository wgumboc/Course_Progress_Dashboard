import Header from './components/Header'
import Button from './components/Button'
import CouseList from './components/CourseList'
import { useState } from 'react'

function App() {

  const [courses, setCourses] = useState([
    {
        id: 1,
        text: 'CPSC 213',
        day: 'Feb 5th at 2:30pm',
        reminder: true, 
    },
    {
        id: 2,
        text: 'CPSC 221',
        day: 'Feb 6th at 1:30pm',
        reminder: true, 
    },
    {
        id: 3,
        text: 'DSCI 100',
        day: 'Feb 5th at 2:30pm',
        reminder: false, 
    },
    {
        id: 4,
        text: 'ECON 323',
        day: 'Feb 5th at 2:30pm',
        reminder: false, 
    }
  ])

  const onClick = (e) => {

    console.log(e)

  }

  return (
    <div className = "container">
      <Header title = "Weighted Average Calculator"/>
      <Button color = 'rgb(41, 97, 153)' text = 'Add Course' onClick = {onClick} />
      <CouseList courses = {courses} />
    </div>
  );
}

export default App;

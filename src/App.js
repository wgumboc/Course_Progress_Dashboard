import Header from './components/Header'
import Button from './components/Button'
import CourseList from './components/CourseList'
import { useState } from 'react'
import AddCourse from './components/AddCourse'
import SideNavigation from './components/SideNavigation'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import background from "./img/DSC02694.JPG";

function App() {

  const [showAddCourse, setShowAddCourse] = useState(false)

  const [expandAll, setExpandAll] = useState(false)

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

  return (
    <>

      <div>
        <Router>
          <SideNavigation />
          <Routes>
            <Route path='/' />
          </Routes>
        </Router>
      </div>
      <div className = "container">

        <Header title = "Weighted Average Calculator"/>

        {showAddCourse &&
          <AddCourse onAdd={addCourse} />
        }
        
        {/* add course button */}
        <Button color = {showAddCourse ? 'rgb(255, 163, 143)' : 'rgb(41, 97, 153)'}
                text = {showAddCourse ? 'Collapse' : 'Add Course'} 
                onClick = {() => setShowAddCourse(!showAddCourse)} />

        <CourseList courses = {courses} />
      </div>

    </>
  );
}

export default App;

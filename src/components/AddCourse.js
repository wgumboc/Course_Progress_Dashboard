import { useState } from 'react'

const AddCourse = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [grade, setGrade] = useState('')

    const [assessment, setAssessment] = useState([
        {
            id: 1,
            text: 'CPSC 213',
            grade: 'Current Grade: 70%'
        }
    ])

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('One or more fields left blank.')
            return
        }

        onAdd({ text, grade })

        setText('')
        setGrade('')
    }

    const addAssessment = () => {

    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Course Name</label>
                <input type='text' placeholder='Add Course' 
                value={text} onChange={(e) => setText(e.target.value)}/>
            </div>

            <button className='btn-assessment' 
                    type="button" 
                    onClick={addAssessment}>Add Assessment Component</button>

            <div className='form-control'>
                <label>Course Assessments</label>
                <input type='text' placeholder='Midterm 1' 
                value={grade} onChange={(e) => setGrade(e.target.value)}/>
            </div>

            <input className='btn btn-block' type='submit' value='Save Course' />
        </form>
    )
}

export default AddCourse
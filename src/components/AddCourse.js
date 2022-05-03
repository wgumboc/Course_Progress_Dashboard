import { useState } from 'react'

const AddCourse = ({ onAdd }) => {
    const [text, setText] = useState('')

    // list of assessment inputs
    const [assessmentList, setAssessmentList] = useState([
        {assessment: ""}])

    console.log(assessmentList);

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('One or more fields left blank.')
            return
        }

        onAdd({ text, assessmentList })

        setText('')
    }

    const addAssessment = () => {
        setAssessmentList([...assessmentList, {assessment: ""}])
    }

    const handleAssessments = (e, index) => {
        const {name, value} = e.target

        if(!value) {
            alert('One or more fields left blank.')
            return
        }

        const list = [...assessmentList];
        list[index][name] = value;
        setAssessmentList(list);
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label className='asmt-title'>Course Name</label>
                <input type='text' placeholder='Add Course' 
                value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            
            <div className='asmt-title'>Course Assessments</div> 

            <button className='btn-assessment' 
                    type="button" 
                    onClick={addAssessment}>Add Assessment Component</button>

            {assessmentList.map((singleAssessment, index) => (
                <div key={index} className='assessment-control'>
                    {/* {assessmentList.length - 1 == index && 
                    <button className='btn-assessment' 
                    type="button" 
                    onClick={addAssessment}>Add Assessment Component</button>} */}

                    <input name='assessment' type='text' placeholder='Assessment Name' 
                    value={singleAssessment.assessment} onChange={(e) => handleAssessments(e, index)}/>

                    <input name='percent' type='number' placeholder='Weight (%)' 
                    value={singleAssessment.percent} onChange={(e) => handleAssessments(e, index)}/>

                </div>)
            )}

            <input className='btn btn-block' type='submit' value='Save Course' />
        </form>
    )
}

export default AddCourse
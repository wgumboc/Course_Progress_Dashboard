import React, { useEffect } from 'react'
import { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const Course = ({course, deleteCourse}) => {

  let [finalGrade, setFinalGrade] = useState(0)
  const [gradeList, setGradeList] = useState([])

  const onClick = (e) => {
  
    const accordionContent = e.target.nextSibling;

    e.target.classList.toggle('accordion__button--active');

    if(e.target.classList.contains('accordion__button--active')) {

      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';

    }  else {

      accordionContent.style.maxHeight = 0;

    }

  }
  
  const handleGrades = (e, index) => {

    const {value} = e.target

    const list = [...gradeList];
    list[index] = value;
    setGradeList(list);

  }

  useEffect(() => {
    finalGrade = 0;
    for (let i = 0; i < gradeList.length; i++) {
      finalGrade = finalGrade + Number(gradeList[i]) * Number(course.assessmentList[i].percent) / 100
    }

    setFinalGrade(finalGrade)
    
  }, [gradeList]);


  return (
    <div className = 'course accordion'>
      <FaTrashAlt className='trash-btn' onClick={() => deleteCourse(course.id)} />
      <button onClick={onClick} type='button' className='accordion__button'>
            {course.text} 
      </button>

      <div className = 'accordion__content assessment-control'>
  
            {course.assessmentList.map((assessment, index) => (
              <div key={index}>

                <div className = 'assessment-block'>{assessment.assessment}</div>
                <div className = 'assessment-block'>Weight: {assessment.percent}%</div>

                <input type='number' placeholder='Add Grade' 
                name='grade' value={gradeList[index]} onChange={(e) => handleGrades(e, index)}/>

              </div>
            ))}

            <div className='grade-block'>Current Mark for {course.text}: {finalGrade}%</div>

      </div>
    </div>
  )
}

export default Course
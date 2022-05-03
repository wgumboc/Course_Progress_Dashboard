import React from 'react'
import { useState } from 'react'
//import { FaTimes } from 'react-icons/fa'

const Course = ({course}) => {
  const [grade, setGrade] = useState('')

  const onClick = (e) => {
  
    const accordionContent = e.target.nextSibling;

    e.target.classList.toggle('accordion__button--active');

    if(e.target.classList.contains('accordion__button--active')) {

      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';

    }  else {

      accordionContent.style.maxHeight = 0;

    }

  }

  return (
    <div className = 'course accordion'>
      <button onClick={onClick} type='button' className='accordion__button'>
        {course.text}
      </button>
      <div className = 'accordion__content assessment-control'>
  
            {course.assessmentList.map((assessment, index) => (
              <div>
                <div className = 'assessment-block'>{assessment.assessment}</div>
                <div className = 'assessment-block'>Weight: {assessment.percent}%</div>
                <input name='percent' type='number' placeholder='Input Grade' value={grade}/>  
              </div>
            ))}


      </div>
    </div>
  )
}

export default Course
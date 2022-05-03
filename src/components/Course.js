import React from 'react'
//import { FaTimes } from 'react-icons/fa'

const Course = ({course}) => {
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
      <div className = 'accordion__content'>
        For the second to last, were given a BST and a key and want to know if that key belongs somewhere in the 
        “middle” of the tree or will be the new leftmost or rightmost node. We can answer that question by just finding the 
        leftmost (minimum) and rightmost (maximum) nodes. In a balanced tree, that will take O(lgn) time, but in a general 
        BST we can get unlucky and have a very deep minimum or maximum (or even both, not that that makes any real difference 
        to either the asymptotic or practical worst-case runtime).
      </div>
    </div>
  )
}

export default Course
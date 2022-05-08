import Course from './Course'

const CourseList = ({ courses, deleteCourse }) => {

  return (
    <>
      {courses.map((course) => (<Course key={course.id} course={course}
                                 deleteCourse={deleteCourse} />))}
    </>
  )

}

export default CourseList
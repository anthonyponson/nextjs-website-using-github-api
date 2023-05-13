import Link from 'next/link'

async function fetchCourses() {
  const res = await fetch('http://localhost:3000/api/courses')
  const data = await res.json()
  return data
}
const Courses = async () => {
  const courses = await fetchCourses()
  return (
    <>
      <div className='flex flex-col justify-center mx-auto space-y-4 mt-6'>
        {courses.map((course) => (
            <div className='p-4 bg-slate-50 rounded-md max-w-xl' key={course.id}>
                <h1>{course.title}</h1>
                <small>
                Publish Date: {course.publishDate}
                </small>
                <p>{course.language}</p>
               <p>{course.authorName}</p>
            </div>
        ))}
      </div>
    </>
  )
}

export default Courses

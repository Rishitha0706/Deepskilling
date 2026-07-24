import { courses } from "./data";

function CourseDetails() {
  return (
    <section className="section">
      <h1>Course Details</h1>

      {courses.map(course => (
        <div key={course.id}>
          <h4>{course.name}</h4>
          <p>{course.date}</p>
        </div>
      ))}
    </section>
  );
}

export default CourseDetails;
import { useEffect, useState } from "react";

function ViewCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then(res => res.json())
      .then(data => setCourses(data))
      .catch(err => console.log("FETCH ERROR:", err));
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h1>Course Catalog</h1>

        {courses.length === 0 ? (
          <p>No courses available</p>
        ) : (
          courses.map(course => (
            <div key={course._id} className="course-item">
              <h3>{course.courseName}</h3>
              <p>Code: {course.courseCode}</p>
              <p>Credits: {course.credits}</p>
              <p>Department: {course.department}</p>
              <hr />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ViewCourses;

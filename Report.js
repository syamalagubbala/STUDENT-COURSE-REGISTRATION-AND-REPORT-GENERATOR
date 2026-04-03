import { useEffect, useState } from "react";

function Report() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then(res => res.json())
      .then(data => setCourses(data))
      .catch(err => console.log(err));
  }, []);

  const totalCredits = courses.reduce(
    (sum, c) => sum + (c.credits || 0),
    0
  );

  return (
    <div className="container">
      <div className="card">
        <h1>Registration Report</h1>

        <p><strong>Student Name:</strong> Demo Student</p>
        <p><strong>Semester:</strong> 3</p>

        <hr />

        {courses.length === 0 ? (
          <p>No registered courses</p>
        ) : (
          courses.map(course => (
            <div key={course._id} className="course-item">
              <p><strong>{course.courseName}</strong></p>
              <p>Code: {course.courseCode}</p>
              <p>Credits: {course.credits}</p>
              <hr />
            </div>
          ))
        )}

        <h3>Total Credits: {totalCredits}</h3>
      </div>
    </div>
  );
}

export default Report;

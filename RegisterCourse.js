import { useEffect, useState } from "react";

function RegisterCourse() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then(res => res.json())
      .then(data => setCourses(data))
      .catch(err => console.log("FETCH ERROR:", err));
  }, []);

  const register = () => {
    if (!selectedCourse) {
      alert("⚠ Please select a course");
      return;
    }

    alert("✅ Course Registered: " + selectedCourse);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Register Course</h1>

        <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
          <option value="">Select Course</option>

          {courses.map(course => (
            <option key={course._id} value={course.courseName}>
              {course.courseName} ({course.courseCode})
            </option>
          ))}
        </select>

        <button onClick={register}>Register</button>
      </div>
    </div>
  );
}

export default RegisterCourse;

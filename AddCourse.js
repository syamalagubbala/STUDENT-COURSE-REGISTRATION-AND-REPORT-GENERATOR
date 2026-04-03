import { useState } from "react";

function AddCourse() {
  const [form, setForm] = useState({
    courseName: "",
    courseCode: "",
    credits: "",
    department: "",
    faculty: "",
    semester: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const saveCourse = async () => {
    if (!form.courseName || !form.courseCode) {
      alert("⚠ Please fill required fields");
      return;
    }

    const payload = {
      ...form,
      credits: Number(form.credits),
      semester: Number(form.semester)
    };

    const res = await fetch("http://localhost:5000/add-course", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    alert(data.message || "Course Added");

    setForm({
      courseName: "",
      courseCode: "",
      credits: "",
      department: "",
      faculty: "",
      semester: ""
    });
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Add Course</h1>

        <input name="courseName" placeholder="Course Name" value={form.courseName} onChange={handleChange} />
        <input name="courseCode" placeholder="Course Code" value={form.courseCode} onChange={handleChange} />
        <input name="credits" placeholder="Credits" value={form.credits} onChange={handleChange} />
        <input name="department" placeholder="Department" value={form.department} onChange={handleChange} />
        <input name="faculty" placeholder="Faculty" value={form.faculty} onChange={handleChange} />
        <input name="semester" placeholder="Semester" value={form.semester} onChange={handleChange} />

        <button onClick={saveCourse}>Save Course</button>
      </div>
    </div>
  );
}

export default AddCourse;

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Course = require("./models/Course");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

/* ---------------- DB CONNECTION ---------------- */

mongoose.connect("mongodb://127.0.0.1:27017/amsDB")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ DB Error:", err));

/* ---------------- TEST ROUTE ---------------- */

app.get("/", (req, res) => {
  res.send("AMS Backend Server Running ✅");
});

/* ---------------- COURSE APIs ---------------- */

// ✅ ADD COURSE
app.post("/add-course", async (req, res) => {
  try {
    const newCourse = new Course(req.body);
    await newCourse.save();

    res.json({ message: "✅ Course Added Successfully" });
  } catch (err) {
    console.log("ADD COURSE ERROR:", err);   // IMPORTANT
    res.status(500).json({ error: "❌ Failed to add course" });
  }
});

// ✅ GET ALL COURSES
app.get("/courses", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    console.log("FETCH COURSES ERROR:", err);  // IMPORTANT
    res.status(500).json({ error: "❌ Failed to fetch courses" });
  }
});

/* ---------------- SERVER START ---------------- */

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

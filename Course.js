const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  courseName: { type: String, required: true },
  courseCode: { type: String, required: true, unique: true },
  credits: { type: Number, required: true },
  department: String,
  faculty: String,
  semester: Number,

  courseType: {
    type: String,
    enum: ["Core", "Elective"],
    default: "Core"
  },

  capacity: {
    type: Number,
    default: 60
  },

  description: String
});

module.exports = mongoose.model("Course", CourseSchema);


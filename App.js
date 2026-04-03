import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import AddCourse from "./pages/AddCourse";
import ViewCourses from "./pages/ViewCourses";
import RegisterCourse from "./pages/RegisterCourse";
import CreateAccount from "./pages/CreateAccount";
import Report from "./pages/Report";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/add-course" element={<AddCourse />} />
        <Route path="/courses" element={<ViewCourses />} />
        <Route path="/register-course" element={<RegisterCourse />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </Router>
  );
}

export default App;

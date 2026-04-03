import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg"></div>

      <div className="container">
        <div className="card">
          <h2>Admin Panel</h2>

          <button onClick={() => navigate("/add-course")}>
            Manage Courses
          </button>

          <button onClick={() => navigate("/courses")}>
            View Courses
          </button>

          <button>
            Generate Reports
          </button>
        </div>
      </div>
    </>
  );
}

export default Admin;

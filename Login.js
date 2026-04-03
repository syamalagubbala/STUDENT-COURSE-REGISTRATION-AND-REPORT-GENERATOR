import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="card">
        <h2>AMS Login</h2>

        <input placeholder="Username" />
        <input type="password" placeholder="Password" />

        <button onClick={() => navigate("/dashboard")}>
          Student Login
        </button>

        <button onClick={() => navigate("/admin")}>
          Admin Login
        </button>
      </div>
    </div>
  );
}

export default Login;

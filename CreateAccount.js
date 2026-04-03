import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateAccount() {
  const navigate = useNavigate();

  const [role, setRole] = useState("student");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const saveAccount = () => {
    if (!username || !password) {
      alert("⚠ Fill all fields");
      return;
    }

    localStorage.setItem(role + "_user", username);
    localStorage.setItem(role + "_pass", password);

    alert("✅ Account created successfully");
    navigate("/");
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Create Account</h1>

        <select onChange={(e) => setRole(e.target.value)}>
          <option value="student">Student</option>
          <option value="admin">Admin</option>
        </select>

        <input
          placeholder="Create Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Create Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={saveAccount}>Save Account</button>
      </div>
    </div>
  );
}

export default CreateAccount;

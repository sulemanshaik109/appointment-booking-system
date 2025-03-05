import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import "../../styles/Login.css";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (error) {
      setErr(error.response.data.message);
    }
  };

  return (
    <div className="container">
      <div className="login-container">
        <h2>Login</h2>
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="input-container">
            <label className="input-label" htmlFor="email">Email</label>
            <input className="input" type="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-container">
            <label className="input-label" htmlFor="password">Password</label>
            <input className="input" type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="login-button">Login</button>

          {err && <p className="error">**{err}</p>}
        </form>
        <p className="msg">Don't have an account? <a href="/register" className="register-link">Register</a></p>
      </div>
    </div>
  );
};

export default Login;

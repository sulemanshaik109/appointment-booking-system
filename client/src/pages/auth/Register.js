import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import "../../styles/Login.css";

const Register = () => {
  const { register } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("")
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
  
    const result = await register({name, email, password, role: "patient"});
  
    if (!result.success) {
      setErrorMessage(result.message);
      const errorObj = {};
      if (result.errors) {
        result.errors.forEach((error) => {
          errorObj[error.field] = error.message;
        });
        setErrors(errorObj);
        console.log(errorObj);
      }
    }
  };
  

  return (
    <div className="container">
      <div className="login-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit} className="form-container">
          <div className="input-container">
            <label className="input-label" htmlFor="name">Name</label>
            <input className="input" type="text" id="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          {errors.name && <p className="error">**{errors.name}</p>}
          <div className="input-container">
            <label className="input-label" htmlFor="email">Email</label>
            <input className="input" type="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-container">
            <label className="input-label" htmlFor="password">Password</label>
            <input className="input" type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="login-button">Register</button>

          {errorMessage && <p className="error">**{errorMessage}</p>}
        </form>
        <p className="msg">Already have an account? <a href="/login" className="register-link">Login</a></p>
      </div>
    </div>
  );
};

export default Register;

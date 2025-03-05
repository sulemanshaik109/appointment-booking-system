import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Error parsing user data:", error);
      return null;
    }
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const register = async (name, email, password, role) => {
    try {
      const res = await axios.post("http://localhost:5000/users/register", {
        name,
        email,
        password,
        role,
      });

      if (res.data.success) {
        alert("Registration successful! You can now log in.");
        navigate("/login");
      } else {
        return { success: false, message: res.message };
      }
    } catch (error) {
      if (error.response) {
        return { success: false, message: error.message, errors: error.response.data.errors };
      } else {
        return { success: false, message: "An unexpected error occurred" };
      }
    }
  };

  const login = async (email, password) => {
    try {
      const res = await axios.post("http://localhost:5000/users/login", { email, password });

      if (res.data.success) {
        setUser(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));

        navigate(res.data.role === "admin" ? "/admin" : "/");
      }
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => useContext(AuthContext);

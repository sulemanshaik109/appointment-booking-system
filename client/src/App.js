import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import AdminHome from "./pages/admin/AdminHome";
import PatientDashboard from "./pages/patient/PatientDashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route 
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={"admin"}>
            <AdminHome />
          </ProtectedRoute>
        }
      />
      <Route 
        path="/"
        element={
          <ProtectedRoute allowedRoles={"patient"}>
            <PatientDashboard />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default App;

import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/admin/dashboard">Dashboard</Link></li>
        <li><Link to="/admin/doctors">All Doctors</Link></li>
        <li><Link to="/admin/add-doctor">Add Doctor</Link></li>
        <li><Link to="/admin/appointments">All Appointments</Link></li>
      </ul>
    </nav>
  );
};

export default AdminSidebar;

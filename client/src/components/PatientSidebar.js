import React from "react";
import { Link } from "react-router-dom";

const PatientSidebar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/patient/dashboard">Dashboard</Link></li>
        <li><Link to="/patient/appointments">My Appointments</Link></li>
      </ul>
    </nav>
  );
};

export default PatientSidebar;

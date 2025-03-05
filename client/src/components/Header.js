import React from "react";
import { useAuth } from "../context/AuthContext";
import "../styles/Header.css";

const Header = () => {
    const { logout } = useAuth();

    const handleLogout = (e) => {
        e.preventDefault();
        logout();
    }

    return (
        <div className="header-container">
            <h1 className="logo">BabySteps</h1>
            <button className="logout-button" type="button" onClick={handleLogout}>Logout</button>
        </div>
    )
};

export default Header;  
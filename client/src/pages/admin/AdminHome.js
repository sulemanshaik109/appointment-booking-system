import React from "react";
import {useAuth} from "../../context/AuthContext";
import Header from "../../components/Header";

const AdminHome = () => {
  const {user} = useAuth();
  console.log(user);
  
  return (
    <div>
      <Header/>
      <h1>Admin</h1>
    </div>
  );
};

export default AdminHome;

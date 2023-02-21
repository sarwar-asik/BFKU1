import React from "react";
import Navbar from "../Pages/Shared/Navbar";
import { Outlet } from "react-router-dom";

const AdminDashboardLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
};

export default AdminDashboardLayout;

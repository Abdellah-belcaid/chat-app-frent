// AppRoutes.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Chats from "../pages/Chats";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";

const AppRoutes = () => {
  return (
    <div className="flex h-full p-1 m-1">
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />

        {/* Private Routes */}
        <Route path="/chats" element={<Chats />} />
        <Route path="/profile" element={<Profile />} />

        {/* Default Redirect */}
        <Route index element={<Home />} />

        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
};

export default AppRoutes;

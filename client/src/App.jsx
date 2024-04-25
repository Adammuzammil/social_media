import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import SignUp from "./pages/auth/SignUp";
import Login from "./pages/auth/Login";
import Sidebar from "./components/common/Sidebar";
import Navbar from "./components/common/Navbar";
import NotificationPage from "./pages/notification/Notification";
import Profile from "./pages/profile/Profile";
import MainLayout from "./components/Layout/MainLayout";

const App = () => {
  return (
    <div className="max-w-[80rem] mx-auto">
      <Navbar />

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/notifications" element={<NotificationPage />} />
          <Route path="/profile/:userName" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

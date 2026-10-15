import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import ManageQues from "../pages/ManageQues";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/manage-ques" element={<ManageQues />} />
    </Routes>
  );
};

export default AppRoutes;

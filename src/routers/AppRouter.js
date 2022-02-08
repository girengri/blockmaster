import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../containers/Home";
import Navbar from "../components/Navbar";
import RegistroUsuarios from "../components/RegistroUsuarios";
import Login from "../components/Login";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<RegistroUsuarios />} />
        <Route path="/iniciarsesion" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

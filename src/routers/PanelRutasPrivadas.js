import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import PeliculaEncontrada from "../components/PeliculaEncontrada";
import Home from "../containers/Home";
import RegistroPeliculas from "../containers/RegistroPeliculas";

export const PanelRutasPrivadas = ({ user }) => {
  return (
    <div>
      <Navbar usuario={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registroPeliculas" element={<RegistroPeliculas />} />
        <Route path="/query" element={<PeliculaEncontrada />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

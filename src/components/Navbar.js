import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutAsincrono } from "../actions/actionLogin";

const Navbar = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutAsincrono());
    navigate("/iniciarsesion");
  };

  return (
    <nav>
      <button onClick={() => handleLogout()}>Cerrar Sesion</button>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { logoutAsincrono } from "../actions/actionLogin";
import { useFormik } from "formik";
import * as Yup from "yup";
import querystring from "query-string";
import "../styles/navbar.css";
// import { buscarPeliculasSincrono } from "../actions/actionPeliculas";

const Navbar = ({ usuario }) => {
  let url = "";

  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = querystring.parse(location.search);

  const formik = useFormik({
    initialValues: {
      buscado: q,
    },
    validationSchema: Yup.object({
      buscado: Yup.string().required(),
    }),
    onSubmit: ({ buscado }) => {
      // dispatch(buscarPeliculasAsincrono(buscado));
      navigate(`?q=${buscado}`);
      // dispatch(buscarPeliculasSincrono(buscado));
    },
  });

  const [ubicacion, setUbicacion] = useState("Obtener Ubicacion");

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutAsincrono());
    navigate("/iniciarsesion");
  };

  const getCoordenadas = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDvS3_rBwM7RJYjDOnPzquTpJVlskDs7nI`;
      console.log(latitude, longitude);
      getUbicacion(url);
    });
  };

  const getUbicacion = async (url) => {
    const resp = await fetch(url);
    const { results } = await resp.json();
    console.log(results);
    console.log(results[6].formatted_address);
    setUbicacion(results[6].formatted_address);
  };

  return (
    <nav className="contenedorNavbar">
      <img
        src="https://res.cloudinary.com/girengri/image/upload/v1644417659/blockmasterimagenes/logo-blockBuster_alf0fk.png"
        alt="logo"
        className="logonavbar"
      />

      <span className="ubicacionNavbar" onClick={() => getCoordenadas()}>
        <img
          src="https://res.cloudinary.com/girengri/image/upload/v1644452832/blockmasterimagenes/icons8-map-24_xoelta.png"
          alt="ubicacion"
        />
        {ubicacion}
      </span>

      <Link className="linknavbar" to="/">
        Todas
      </Link>
      <Link className="linknavbar" to="#">
        Más valoradas
      </Link>
      <Link className="linknavbar" to="#">
        Menos valoradas
      </Link>

      <form className="buscadorinput" onSubmit={formik.handleSubmit}>
        <input
          placeholder="Busca tu pelicula favorita"
          className="inputNavbar"
          name="buscado"
          onChange={formik.handleChange}
        />

        <img
          src="https://res.cloudinary.com/girengri/image/upload/v1644455127/blockmasterimagenes/primary_prsbdy.png"
          alt="buscador"
          className="imgbuscador"
        />
      </form>

      <p>
        Bienvenido <br />
        {usuario?.displayName}
        <img
          className="fotoPerfilUsuario"
          src={usuario?.photoURL}
          alt="imagenusuario"
          width="50"
        />
      </p>

      <Link className="linknavbar" to="/registroPeliculas">
        Agregar Peliculas
      </Link>
      <span className="linknavbar cerrarSesion" onClick={() => handleLogout()}>
        Cerrar Sesion
      </span>
    </nav>
  );
};

export default Navbar;

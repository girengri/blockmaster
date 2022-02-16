import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  loginEmailAndPassword,
  loginFacebook,
  loginGoogle,
} from "../actions/actionLogin";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../styles/login.css";

const Login = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      correo: "",
      contraseña: "",
    },
    onSubmit: ({ correo, contraseña }) => {
      dispatch(loginEmailAndPassword(correo, contraseña));
    },
    validationSchema: Yup.object({
      correo: Yup.string()
        .email("No es un email valido")
        .required("El email es obligatorio"),
      contraseña: Yup.string().required("La contraseña es obligatoria"),
    }),
  });

  const handleGoogle = () => {
    dispatch(loginGoogle());
  };

  const handleFacebook = () => {
    dispatch(loginFacebook());
  };
  return (
    <div className="bglogin">
      <div>
        <img
          src="https://res.cloudinary.com/girengri/image/upload/v1644417659/blockmasterimagenes/logo-blockBuster_alf0fk.png"
          alt="logo"
          className="logoprincipal"
        />
      </div>

      <form className="centrarSesionLogin" onSubmit={formik.handleSubmit}>
        <h2>Inicia sesión</h2>
        <div className="itemlogin">
          <input
            id="correo"
            name="correo"
            type="text"
            onChange={formik.handleChange}
            placeholder="Dirección de correo electrónico"
            className="itemcajas"
            autoComplete="off"
          />
        </div>
        <p className="erroresFormik">{formik.errors.correo}</p>

        <div className="itemlogin">
          <input
            id="contraseña"
            name="contraseña"
            type="password"
            onChange={formik.handleChange}
            placeholder="Contraseña"
            className="itemcajas"
            autoComplete="off"
          />
        </div>
        <p className="erroresFormik">{formik.errors.contraseña}</p>
        <div className="itemlogin">
          <button className="btnlogin" type="submit">
            Iniciar sesión
          </button>
        </div>
        <div className="itemlogin">
          <button className="btnlogin" onClick={() => handleGoogle()}>
            Iniciar sesión con Google
          </button>
        </div>
        <div className="itemlogin">
          <button className="btnlogin" onClick={() => handleFacebook()}>
            Iniciar sesión con Facebook
          </button>
        </div>
        <p className="itemlogin coloritemlogin">
          ¿Primera vez en Block Master?
          <span className="contenedorRegistro">
            <Link className="registrate" to="/registro">
              Registrate
            </Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;

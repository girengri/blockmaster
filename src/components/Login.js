import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginEmailAndPassword, loginGoogle } from "../actions/actionLogin";
import { useForm } from "../hooks/useForm";
import "../styles/login.css";

const Login = () => {
  const dispatch = useDispatch();

  const [values, handleInputChange] = useForm({
    correo: "",
    contraseña: "",
  });

  const { correo, contraseña } = values;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginEmailAndPassword(correo, contraseña));
  };

  const handleGoogle = () => {
    dispatch(loginGoogle());
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

      <form className="centrarSesion" onSubmit={handleLogin}>
        <h2>Inicia sesión</h2>
        <div className="itemlogin">
          <input
            id="correo"
            name="correo"
            type="text"
            required
            value={correo}
            onChange={handleInputChange}
            placeholder="Dirección de correo electrónico"
            className="itemcajas"
            autoComplete="off"
          />
        </div>
        <div className="itemlogin">
          <input
            id="contraseña"
            name="contraseña"
            type="password"
            required
            value={contraseña}
            onChange={handleInputChange}
            placeholder="Contraseña"
            className="itemcajas"
            autoComplete="off"
          />
        </div>
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
          <button className="btnlogin">Iniciar sesión con Facebook</button>
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

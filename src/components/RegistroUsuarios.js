import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registroEmailPasswordNombre } from "../actions/actionRegister";
import { useForm } from "../hooks/useForm";
import "../styles/login.css";

const RegistroUsuarios = () => {
  const dispatch = useDispatch();

  const [values, handleInputChange] = useForm({
    nombre: "",
    correo: "",
    contraseña1: "",
    contraseña2: "",
  });

  const { nombre, correo, contraseña1, contraseña2 } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registroEmailPasswordNombre(correo, contraseña1, nombre));
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

      <form className="centrarSesion" onSubmit={handleSubmit}>
        <h2>Crear cuenta</h2>
        <div className="itemlogin">
          <input
            id="nombre"
            name="nombre"
            type="text"
            required
            value={nombre}
            onChange={handleInputChange}
            placeholder="Nombre"
            className="itemcajas"
            autoComplete="off"
          />
        </div>

        <div className="itemlogin">
          <input
            id="correo"
            name="correo"
            type="text"
            required
            value={correo}
            onChange={handleInputChange}
            placeholder="Correo electronico"
            className="itemcajas"
            autoComplete="off"
          />
        </div>

        <div className="itemlogin">
          <input
            id="contraseña1"
            name="contraseña1"
            type="password"
            required
            value={contraseña1}
            onChange={handleInputChange}
            placeholder="Contraseña"
            className="itemcajas"
            autoComplete="off"
          />
        </div>

        <div className="itemlogin">
          <input
            id="contraseña2"
            name="contraseña2"
            type="password"
            required
            value={contraseña2}
            onChange={handleInputChange}
            placeholder="Repetir contraseña"
            className="itemcajas"
            autoComplete="off"
          />
        </div>

        <div className="itemlogin">
          <button className="btnlogin" type="submit">
            Registrar
          </button>
        </div>

        <p className="itemlogin coloritemlogin">
          ¿Ya tienes una cuenta?
          <span className="contenedorRegistro">
            <Link className="registrate" to="/iniciarsesion">
              Iniciar sesión
            </Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default RegistroUsuarios;

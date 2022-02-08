import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";

const RegistroUsuarios = () => {
  const [values, handleInputChange] = useForm({
    nombre: "",
    correo: "",
    contraseña1: "",
    contraseña2: "",
  });

  const { nombre, correo, contraseña1, contraseña2 } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div>
        <img
          src="https://res.cloudinary.com/girengri/image/upload/v1642129826/amazonasbanners/Amazon_Logo_gdncuo.png"
          alt="logo"
        />
      </div>

      <div>
        <h1>Crear cuenta</h1>

        <form onSubmit={handleSubmit}>
          <h5>Tu nombre</h5>
          <input
            id="nombre"
            name="nombre"
            type="text"
            required
            value={nombre}
            onChange={handleInputChange}
          />

          <h5>Correo electrónico</h5>
          <input
            id="correo"
            name="correo"
            type="text"
            required
            value={correo}
            onChange={handleInputChange}
          />

          <h5>Contraseña</h5>
          <input
            id="contraseña1"
            name="contraseña1"
            type="password"
            placeholder="Como mínimo 6 caracteres"
            required
            value={contraseña1}
            onChange={handleInputChange}
          />

          <h5>Vuelve a escribir la contraseña</h5>
          <input
            id="contraseña2"
            name="contraseña2"
            type="password"
            required
            value={contraseña2}
            onChange={handleInputChange}
          />

          <div>
            <button type="submit">Continuar</button>
          </div>

          <div>
            <p>¿Ya tienes una cuenta?</p>
            <Link to="/iniciarsesion">
              <p>Iniciar sesión</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistroUsuarios;

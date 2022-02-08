import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";

const Login = () => {
  const [values, handleInputChange] = useForm({
    correo: "",
    contraseña: "",
  });

  const { correo, contraseña } = values;

  const handleLogin = (e) => {
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
        <h1>Iniciar sesión</h1>

        <form onSubmit={handleLogin}>
          <h5>Dirección de correo electrónico</h5>
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
            id="contraseña"
            name="contraseña"
            type="password"
            required
            value={contraseña}
            onChange={handleInputChange}
          />
        </form>
        <div>
          <button type="submit">Iniciar sesión</button>

          <button>Iniciar sesión con Google</button>

          <button>Iniciar sesión con Facebook</button>
        </div>
      </div>
      <p>¿Eres nuevo en Amazonas?</p>
      <Link to="/registro">
        <button>Crea tu cuenta de Amazonas</button>
      </Link>
    </div>
  );
};

export default Login;

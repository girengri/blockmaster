import React from "react";
import AgregarPeliculas from "../components/AgregarPeliculas";
import ListaPeliculasAgregadas from "../components/ListaPeliculasAgregadas";

const RegistroPeliculas = () => {
  return (
    <div className="container mt-5">
      <h2>Peliculas</h2> <hr />
      <div className="row">
        <div className="col-8">
          <ListaPeliculasAgregadas />
        </div>

        <div className="col-4">
          <h2>
            <AgregarPeliculas />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default RegistroPeliculas;

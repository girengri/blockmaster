import React from "react";

const ListaPeliculasAgregadas = () => {
  return (
    <div>
      <table className="table text-center mt-3">
        <thead>
          <tr>
            <th scope="col">Imagen</th>
            <th scope="col">Nombre</th>
            <th scope="col">Año</th>
            <th scope="col">Genero</th>
            <th scope="col">Duracion</th>
            <th scope="col">Calificacion</th>
            <th scope="col">Descripcion</th>
          </tr>
        </thead>

        <tbody></tbody>
      </table>
    </div>
  );
};

export default ListaPeliculasAgregadas;

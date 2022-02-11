import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  eliminarPeliculaASincrono,
  listarPeliculasAsincrono,
} from "../actions/actionPeliculas";

const ListaPeliculasAgregadas = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listarPeliculasAsincrono());
  }, []);

  const { peliculas } = useSelector((store) => store.movie);

  return (
    <div>
      <table className="table text-center mt-3">
        <thead>
          <tr>
            <th scope="col">Imagen</th>
            <th scope="col">Nombre</th>
            <th scope="col">Año</th>
            <th scope="col">Sinopsis</th>
            <th scope="col">Accion</th>
          </tr>
        </thead>

        <tbody>
          {peliculas.map((pelicul, index) => (
            <tr key={index}>
              <td>
                <img src={pelicul.imagen} alt="imagen Pelicula" width="50" />
              </td>
              <td>{pelicul.nombre}</td>
              <td>{pelicul.año}</td>
              <td>{pelicul.sinopsis}</td>
              <td>
                <button className="btn btn-success btn-sm float-end mx-2">
                  Modificar
                </button>
              </td>
              <td>
                <button
                  onClick={() =>
                    dispatch(eliminarPeliculaASincrono(pelicul.sinopsis))
                  }
                  className="btn btn-danger btn-sm float-end"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaPeliculasAgregadas;

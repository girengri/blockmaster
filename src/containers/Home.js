import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listarPeliculasAsincrono } from "../actions/actionPeliculas";
import "../styles/home.css";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listarPeliculasAsincrono());
  }, []);

  const { peliculas } = useSelector((store) => store.movie);
  return (
    <div className="bgHome">
      <ul className="gridPeliculas">
        {peliculas.map((pelicul, index) => (
          <li className="movieCard" key={index}>
            <div className="puntuacionCard">{pelicul.calificacion}</div>
            <img
              className="movieImage"
              src={pelicul.imagen}
              alt="peliculas"
              width={230}
              height={345}
            />
            <h2 className="colorNombrePelicula">{pelicul.nombre}</h2>
          </li>
        ))}
        ;
      </ul>
    </div>
  );
};

export default Home;

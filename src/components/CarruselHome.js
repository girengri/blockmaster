import React from "react";
import { Carousel } from "react-bootstrap";
import { moviesCarrusel } from "../data/moviesCarrusel";
import "../styles/carruselhome.css";

const CarruselHome = () => {
  return (
    <div className="contenedorCarrusel">
      <Carousel>
        {moviesCarrusel.map((movie) => (
          <Carousel.Item key={movie.id}>
            <img
              className="borderRadiusCarrusel"
              src={movie.imagen}
              alt="carrusel"
              width={900}
            />
            <a
              className="btncarruseltrailer"
              href={movie.trailer}
              target="_blank"
              rel="noreferrer"
            >
              Ver trailer
            </a>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarruselHome;

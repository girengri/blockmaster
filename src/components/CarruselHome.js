import React from "react";
import { Carousel } from "react-bootstrap";
import { moviesCarrusel } from "../data/moviesCarrusel";
import "../styles/carruselhome.css";

const CarruselHome = () => {
  return (
    <div className="contenedorCarrusel">
      <Carousel className="borderrendondeado">
        {moviesCarrusel.map((movie) => (
          <Carousel.Item key={movie.id}>
            <iframe
              width="1510"
              height="400"
              src={movie.trailer}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarruselHome;

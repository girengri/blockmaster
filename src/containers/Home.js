import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { listarPeliculasAsincrono } from "../actions/actionPeliculas";
import CarruselHome from "../components/CarruselHome";
import { useForm } from "../hooks/useForm";
import "../styles/home.css";
import "../styles/modaldetalles.css";

const Home = () => {
  const [insertarModal, setInsertarModal] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listarPeliculasAsincrono());
  }, []);

  const { peliculas } = useSelector((store) => store.movie);

  const [values, , setValues] = useForm({
    id: "",
    nombre: "",
    año: "",
    genero: "",
    duracion: "",
    calificacion: "",
    sinopsis: "",
    imagen: "",
  });

  const { nombre, año, genero, duracion, calificacion, sinopsis, imagen } =
    values;

  const mostrarDetalles = (pelicula) => {
    setInsertarModal(true);
    setValues(pelicula);
  };

  const cerrarModal = () => {
    setInsertarModal(false);
  };

  return (
    <React.Fragment>
      <CarruselHome />

      <div className="bgHome">
        <ul className="gridPeliculas">
          {peliculas.map((pelicul, index) => (
            <li
              onClick={() => mostrarDetalles(pelicul)}
              className="movieCard"
              key={index}
            >
              <div className="puntuacionCard">★ {pelicul.calificacion}%</div>
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

      <Modal isOpen={insertarModal}>
        <ModalHeader>
          <div>
            <img className="imagenInclinada" width={300} src={imagen} alt="" />
            <p className="puntuacionInclinada">★ {calificacion}%</p>
          </div>
        </ModalHeader>

        <ModalBody>
          <div className="cerrarbtn">
            <img
              src="https://res.cloudinary.com/girengri/image/upload/v1644878712/blockmasterimagenes/icons8-macos-close-30_l9i6zs.png"
              alt="cerrar"
              onClick={() => cerrarModal()}
            />
          </div>

          <div className="centrarInfoPrincipalModal">
            <h2>{nombre}</h2>
            <p>{sinopsis}</p>
          </div>

          <div className="centrarInfoModal">
            <h5>{año}</h5>
            <h5>{genero}</h5>
            <h5>{duracion}</h5>
          </div>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

export default Home;

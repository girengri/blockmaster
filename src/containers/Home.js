import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  FormGroup,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { listarPeliculasAsincrono } from "../actions/actionPeliculas";
import CarruselHome from "../components/CarruselHome";
import { useForm } from "../hooks/useForm";
import "../styles/home.css";

const Home = () => {
  const [insertarModal, setInsertarModal] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listarPeliculasAsincrono());
  }, []);

  const { peliculas } = useSelector((store) => store.movie);

  const [values, handleInputChange, setValues] = useForm({
    id: "",
    nombre: "",
    año: "",
    genero: "",
    duracion: "",
    calificacion: "",
    sinopsis: "",
  });

  const { id, nombre, año, genero, duracion, calificacion, sinopsis } = values;

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
            <h3>Modificar Pelicula</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <input
              className="form-control"
              type="text"
              onChange={handleInputChange}
              value={id}
            />
          </FormGroup>

          <FormGroup>
            <label>Nombre:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre"
              name="nombre"
              required
              autoComplete="off"
              onChange={handleInputChange}
              value={nombre}
            />
          </FormGroup>

          <FormGroup>
            <label>Año:</label>
            <input
              id="inputAño"
              type="number"
              className="form-control mt-2"
              name="año"
              required
              autoComplete="off"
              min="1900"
              onChange={handleInputChange}
              value={año}
            />
          </FormGroup>

          <FormGroup>
            <label>Genero:</label>
            <input
              id="inputGenero"
              type="text"
              className="form-control mt-2"
              name="genero"
              required
              autoComplete="off"
              onChange={handleInputChange}
              value={genero}
            />
          </FormGroup>

          <FormGroup>
            <label>Duracion:</label>
            <input
              id="inputDuracion"
              type="text"
              className="form-control mt-2"
              name="duracion"
              required
              autoComplete="off"
              onChange={handleInputChange}
              value={duracion}
            />
          </FormGroup>

          <FormGroup>
            <label>Calificacion:</label>
            <input
              id="inputCalificacion"
              type="number"
              className="form-control mt-2"
              name="calificacion"
              required
              autoComplete="off"
              min="1"
              onChange={handleInputChange}
              value={calificacion}
            />
          </FormGroup>

          <FormGroup>
            <label>Sinopsis:</label>
            <textarea
              id="inputSinopsis"
              className="form-control mt-2 altoSinopsis"
              name="sinopsis"
              required
              autoComplete="off"
              onChange={handleInputChange}
              value={sinopsis}
            ></textarea>
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="danger" onClick={() => cerrarModal()}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actualizarPeliculaASincrono,
  eliminarPeliculaASincrono,
  listarPeliculasAsincrono,
} from "../actions/actionPeliculas";
import {
  Button,
  Container,
  FormGroup,
  Modal,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import "../styles/listaPeliculasAgregadas.css";
import { useForm } from "../hooks/useForm";

const ListaPeliculasAgregadas = () => {
  const [insertarModal, setInsertarModal] = useState(false);

  const [values, handleInputChange, setValues] = useForm({
    id: "",
    nombre: "",
    año: "",
    genero: "",
    duracion: "",
    calificacion: "",
    sinopsis: "",
  });

  const { nombre, año, genero, duracion, calificacion, sinopsis } = values;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listarPeliculasAsincrono());
  }, []);

  const { peliculas } = useSelector((store) => store.movie);

  const handleClickModificar = (pelicula) => {
    setInsertarModal(true);
    setValues(pelicula);
    // dispatch(actualizarPeliculaASincrono(pelicula));
  };

  const cerrarModal = () => {
    setInsertarModal(false);
  };
  // console.log(values)

  return (
    <React.Fragment>
      <Container>
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
                  <button
                    className="btn btn-warning btn-sm float-end mx-2"
                    onClick={() => handleClickModificar(pelicul)}
                  >
                    Modificar
                  </button>
                </td>
                <td>
                  <button
                    onClick={() =>
                      dispatch(eliminarPeliculaASincrono(pelicul.id))
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
      </Container>

      <Modal isOpen={insertarModal}>
        <ModalBody>
          <div>
            <h3>Modificar Pelicula</h3>
          </div>
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
          <Button
            color="warning"
            onClick={() => dispatch(actualizarPeliculaASincrono(values))}
          >
            Modificar
          </Button>
          <Button color="danger" onClick={() => cerrarModal()}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default ListaPeliculasAgregadas;

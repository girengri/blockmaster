import React, { useState } from "react";
import { fileUpload } from "../helpers/FileUpload";
import { useDispatch } from "react-redux";
import { registroPeliculaAsincrono } from "../actions/actionPeliculas";
import { v4 as uuidv4 } from "uuid";

const AgregarPeliculas = () => {
    const dispatch = useDispatch();

    const [inputForm, setinputForm] = useState({
        imagen: "",
        nombre: "",
        año: 0,
        genero: "",
        duracion: "",
        calificacion: 0,
        sinopsis: "",
    });

    const { imagen, nombre, año, genero, duracion, calificacion, sinopsis } =
        inputForm;

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            id: uuidv4(),
            imagen,
            nombre,
            año,
            genero,
            duracion,
            calificacion,
            sinopsis,
        };
        dispatch(registroPeliculaAsincrono(data));
    };

    const handleChange = ({ target }) => {
        setinputForm({
            ...inputForm,
            [target.name]: target.value,
        });
    };

    const handleInputClick = () => {
        document.querySelector("#inputImagen").click();
    };

    const handleFileChange = (e) => {
        // console.log(e.target.files[0]);
        const file = e.target.files[0];
        fileUpload(file)
            .then((response) => {
                // console.log(response);
                setinputForm({
                    ...inputForm,
                    imagen: response,
                });
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <h3 className="text-center">Agregar Peliculas</h3>
            <form className="form-group" onSubmit={handleSubmit}>
                <input
                    id="inputImagen"
                    type="file"
                    className="form-control"
                    placeholder="Seleccionar Imagen"
                    name="imagen"
                    required
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                />
                <button
                    type="button"
                    className="btn btn-dark"
                    onClick={() => handleInputClick()}
                >
                    Seleccionar Imagen
                </button>

                <input
                    id="inputNombre"
                    type="text"
                    className="form-control"
                    placeholder="Nombre"
                    name="nombre"
                    required
                    autoComplete="off"
                    onChange={handleChange}
                    value={nombre}
                />

                <input
                    id="inputAño"
                    type="number"
                    className="form-control mt-2"
                    placeholder="Año"
                    name="año"
                    required
                    autoComplete="off"
                    min="1900"
                    onChange={handleChange}
                    value={año}
                />

                <input
                    id="inputGenero"
                    type="text"
                    className="form-control mt-2"
                    placeholder="Genero"
                    name="genero"
                    required
                    autoComplete="off"
                    onChange={handleChange}
                    value={genero}
                />

                <input
                    id="inputDuracion"
                    type="text"
                    className="form-control mt-2"
                    placeholder="Duracion"
                    name="duracion"
                    required
                    autoComplete="off"
                    onChange={handleChange}
                    value={duracion}
                />

                <input
                    id="inputCalificacion"
                    type="number"
                    className="form-control mt-2"
                    placeholder="Calificacion"
                    name="calificacion"
                    required
                    autoComplete="off"
                    min="1"
                    onChange={handleChange}
                    value={calificacion}
                />

                <textarea
                    id="inputSinopsis"
                    className="form-control mt-2"
                    placeholder="Sinopsis"
                    name="sinopsis"
                    required
                    autoComplete="off"
                    onChange={handleChange}
                    value={sinopsis}
                ></textarea>

                <div className="d-grid gap-2 mx-auto mt-2">
                    <button type="submit" className="btn btn-dark">
                        Agregar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AgregarPeliculas;

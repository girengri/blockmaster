import React from "react";
import { fileUpload } from "../helpers/FileUpload";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { registroPeliculaAsincrono } from "../actions/actionPeliculas";

const AgregarPeliculas = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            imagen: "",
            nombre: "",
            año: 1900,
            genero: "",
            duracion: "",
            calificacion: 1,
            sinopsis: "",
        },
        onSubmit: (data) => {
            // console.log(data);
            dispatch(registroPeliculaAsincrono(data));
        },
    });
    const handleInputClick = () => {
        document.querySelector("#inputImagen").click();
    };

    const handleFileChange = (e) => {
        // console.log(e.target.files[0]);
        const file = e.target.files[0];
        fileUpload(file)
            .then((response) => {
                // console.log(response);
                formik.initialValues.imagen = response;
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <h3 className="text-center">Agregar Peliculas</h3>
            <form className="form-group" onSubmit={formik.handleSubmit}>
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
                    onChange={formik.handleChange}
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
                    onChange={formik.handleChange}
                />

                <input
                    id="inputGenero"
                    type="text"
                    className="form-control mt-2"
                    placeholder="Genero"
                    name="genero"
                    required
                    autoComplete="off"
                    onChange={formik.handleChange}
                />

                <input
                    id="inputDuracion"
                    type="text"
                    className="form-control mt-2"
                    placeholder="Duracion"
                    name="duracion"
                    required
                    autoComplete="off"
                    onChange={formik.handleChange}
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
                    onChange={formik.handleChange}
                />

                <textarea
                    id="inputSinopsis"
                    className="form-control mt-2"
                    placeholder="Sinopsis"
                    name="sinopsis"
                    required
                    autoComplete="off"
                    onChange={formik.handleChange}
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

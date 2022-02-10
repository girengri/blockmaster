import React from "react";

const AgregarPeliculas = () => {
    return (
        <div>
            <h3 className="text-center">Agregar Peliculas</h3>
            <form className="form-group">
                <input
                    id="inputImagen"
                    type="file"
                    className="form-control"
                    placeholder="Seleccionar Imagen"
                    name="imagen"
                    required
                    style={{ display: "none" }}
                />
                <button type="button" className="btn btn-dark">
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
                />

                <input
                    id="inputGenero"
                    type="text"
                    className="form-control mt-2"
                    placeholder="Genero"
                    name="genero"
                    required
                    autoComplete="off"
                />

                <input
                    id="inputDuracion"
                    type="text"
                    className="form-control mt-2"
                    placeholder="Duracion"
                    name="duracion"
                    required
                    autoComplete="off"
                />

                <input
                    id="inputCalificacion"
                    type="number"
                    className="form-control mt-2"
                    placeholder="Calificacion"
                    name="calificacion"
                    required
                    autoComplete="off"
                />

                <textarea
                    id="inputSinopsis"
                    className="form-control mt-2"
                    placeholder="Sinopsis"
                    name="sinopsis"
                    required
                    autoComplete="off"
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

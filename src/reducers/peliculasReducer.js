import { typesPeliculas } from "../types/types";

const initialState = {
    peliculas: [],
};

export const peliculasReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesPeliculas.registrar:
            return {
                peliculas: [action.payload],
            };

        case typesPeliculas.listar:
            return {
                peliculas: [...action.payload],
            };

        case typesPeliculas.eliminar:
            return {
                peliculas: state.peliculas.filter(
                    (pel) => pel.sinopsis !== action.payload
                ),
            };

        case typesPeliculas.buscar:
            return {
                peliculas: [action.payload],
            };

        default:
            return state;
    }
};

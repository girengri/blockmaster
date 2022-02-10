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
                ...state,
            };

        default:
            return state;
    }
};

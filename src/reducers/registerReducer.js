import { typesSesion } from "../types/types";

export const registerReducer = (state = {}, action) => {
    switch (action.type) {
        case typesSesion.register:
            return {
                correo: action.payload.correo,
                contraseña: action.payload.contraseña,
                nombre: action.payload.nombre,
            };

        default:
            return state;
    }
};

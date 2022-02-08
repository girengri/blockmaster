import { typesSesion } from "../types/types";

export const registerSincrono = (correo, contraseña, nombre) => {
    return {
        type: typesSesion.register,
        payload: {
            correo,
            contraseña,
            nombre,
        },
    };
};

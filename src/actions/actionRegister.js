import { typesSesion } from "../types/types";
import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";

export const registroEmailPasswordNombre = (correo, contraseña, nombre) => {
    return (dispatch) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, correo, contraseña)
            .then(async ({ user }) => {
                await updateProfile(auth.currentUser, { displayName: nombre });
                dispatch(registerSincrono(user.email, user.uid, user.displayName));
            })
            .catch((error) => console.log(error));
    };
};

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

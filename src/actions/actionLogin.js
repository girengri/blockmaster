import { typesSesion } from "../types/types";
import {
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { facebook, google } from "../firebase/firebaseConfig";
import { toast } from "react-toastify";

export const logoutAsincrono = () => {
    return (dispatch) => {
        const auth = getAuth();
        signOut(auth)
            .then((user) => {
                dispatch(logoutSincrono());
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const logoutSincrono = () => {
    return {
        type: typesSesion.logout,
        payload: {},
    };
};

export const loginEmailAndPassword = (correo, contraseña) => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, correo, contraseña)
            .then(({ user }) => {
                // console.log(user);
                dispatch(loginSincrono(user.uid, user.displayName));
                console.log("Bienvenido");
            })
            .catch((error) => {
                toast("Correo o Contraseña Incorrectos", {
                    type: "error",
                    autoClose: 3000,
                    position: toast.POSITION.TOP_CENTER,
                });
            });
    };
};

export const loginGoogle = () => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, google)
            .then((user) => {
                dispatch(loginSincrono(user.uid, user.displayName));
            })
            .catch((error) => console.log(error));
    };
};

export const loginFacebook = () => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, facebook)
            .then((user) => {
                dispatch(loginSincrono(user.uid, user.displayName));
            })
            .catch((error) => console.log(error));
    };
};

export const loginSincrono = (id, displayname) => {
    return {
        type: typesSesion.login,
        payload: {
            id,
            displayname,
        },
    };
};

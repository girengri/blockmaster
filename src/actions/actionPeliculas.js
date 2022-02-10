import { typesPeliculas } from "../types/types";
import { addDoc, collection, doc, getDocs } from "firebase/firestore";
import { dataBase } from "../firebase/firebaseConfig";

//Crear (METODO POST)
export const registroPeliculaAsincrono = (pelicula) => {
    return (dispatch) => {
        addDoc(collection(dataBase, "peliculasdb"), pelicula)
            .then((resp) => {
                dispatch(registroPeliculaSincrono(pelicula));
                dispatch(listarPeliculasAsincrono());
                console.log(resp);
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const registroPeliculaSincrono = (pelicula) => {
    return {
        type: typesPeliculas.registrar,
        payload: pelicula,
    };
};

//Leer (METODO GET)
export const listarPeliculasAsincrono = () => {
    return async (dispatch) => {
        const querySnapshot = await getDocs(collection(dataBase, "peliculasdb"));
        // console.log(querySnapshot);
        const pelis = [];
        querySnapshot.forEach((doc) => {
            // console.log(doc.data());
            pelis.push({
                ...doc.data(),
            });
        });
        // console.log(pelis);
        dispatch(listarPeliculasSincrono(pelis));
    };
};

export const listarPeliculasSincrono = (peliculas) => {
    return {
        type: typesPeliculas.listar,
        payload: peliculas,
    };
};

//Eliminar (METODO DELETE)
export const eliminarPeliculaSincrono = (correo) => {
    return {
        type: typesPeliculas.eliminar,
        payload: correo,
    };
};

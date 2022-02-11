import { typesPeliculas } from "../types/types";
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    query,
    where,
} from "firebase/firestore";
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
export const eliminarPeliculaASincrono = (sinopsis) => {
    return async (dispatch) => {
        const coleccion = collection(dataBase, "peliculasdb");
        // console.log(coleccion);
        const consulta = query(coleccion, where("sinopsis", "==", sinopsis));
        // console.log(consulta);
        const datos = await getDocs(consulta);
        // console.log(datos);
        datos.forEach((docu) => {
            // console.log(docu.id);
            deleteDoc(doc(dataBase, "peliculasdb", docu.id));
        });
        dispatch(eliminarPeliculaSincrono(sinopsis));
    };
};

export const eliminarPeliculaSincrono = (sinopsis) => {
    return {
        type: typesPeliculas.eliminar,
        payload: sinopsis,
    };
};

//Buscar
export const buscarPeliculasAsincrono = (inputText) => {
    return async (dispatch) => {
        // console.log(inputText);
        const coleccion = collection(dataBase, "peliculasdb");
        // console.log(coleccion);
        const consulta = query(coleccion, where("nombre", "==", inputText));
        // console.log(consulta);
        const datos = await getDocs(consulta);
        let peliculasEncontrada = [];
        // console.log(datos);
        datos.forEach((dat) => {
            // console.log(dat.data());
            peliculasEncontrada.push(dat.data());
        });
        // console.log(peliculaEncontrada);
        dispatch(buscarPeliculasSincrono(peliculasEncontrada));
    };
};

export const buscarPeliculasSincrono = (peliculas) => {
    return {
        type: typesPeliculas.buscar,
        payload: peliculas,
    };
};

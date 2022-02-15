import { typesPeliculas } from "../types/types";
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    orderBy,
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
        const coleccion = collection(dataBase, "peliculasdb");
        const consulta = query(coleccion, orderBy("fecha", "desc"));
        const datos = await getDocs(consulta);
        const pelis = [];
        datos.forEach((doc) => {
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
export const eliminarPeliculaASincrono = (id) => {
    return async (dispatch) => {
        const coleccion = collection(dataBase, "peliculasdb");
        // console.log(coleccion);
        const consulta = query(coleccion, where("id", "==", id));
        // console.log(consulta);
        const datos = await getDocs(consulta);
        // console.log(datos);
        datos.forEach((docu) => {
            // console.log(docu.id);
            deleteDoc(doc(dataBase, "peliculasdb", docu.id));
        });
        dispatch(eliminarPeliculaSincrono(id));
        dispatch(listarPeliculasAsincrono());
    };
};

export const eliminarPeliculaSincrono = (id) => {
    return {
        type: typesPeliculas.eliminar,
        payload: id,
    };
};

//Buscar
export const buscarPeliculasAsincrono = (inputText) => {
    return async (dispatch) => {
        // console.log(inputText);
        const coleccion = collection(dataBase, "peliculasdb");
        // console.log(coleccion);
        const consulta = query(coleccion, where("nombre", "==", inputText));
        // console.log(consulta)
        const datos = await getDocs(consulta);
        // console.log(datos)
        let peliculaEncontrada = [];
        datos.forEach((dat) => {
            // console.log(dat.data());
            peliculaEncontrada.push(dat.data());
        });
        // console.log(peliculaEncontrada)
        dispatch(buscarPeliculasSincrono(peliculaEncontrada));
    };
};

export const ordenarPeliculasMasValoradas = () => {
    return async (dispatch) => {
        const coleccion = collection(dataBase, "peliculasdb");
        const consulta = query(coleccion, orderBy("calificacion", "desc"));
        const datos = await getDocs(consulta);
        let peliculaOrdenada = [];
        datos.forEach((dat) => {
            peliculaOrdenada.push(dat.data());
        });
        dispatch(buscarPeliculasSincrono(peliculaOrdenada));
    };
};
export const ordenarPeliculasMenosValoradas = () => {
    return async (dispatch) => {
        const coleccion = collection(dataBase, "peliculasdb");
        const consulta = query(coleccion, orderBy("calificacion", "asc"));
        const datos = await getDocs(consulta);
        let peliculaOrdenada = [];
        datos.forEach((dat) => {
            peliculaOrdenada.push(dat.data());
        });
        dispatch(buscarPeliculasSincrono(peliculaOrdenada));
    };
};

export const buscarPeliculasSincrono = (peliculas) => {
    return {
        type: typesPeliculas.buscar,
        payload: peliculas,
    };
};

//Actualizar (METODO PUT)
export const actualizarPeliculaSincrono = (producto) => {
    return {
        type: typesPeliculas.actualizar,
        payload: producto,
    };
};

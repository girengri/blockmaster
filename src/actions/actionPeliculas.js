import { typesPeliculas } from "../types/types";
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    orderBy,
    query,
    updateDoc,
    where,
} from "firebase/firestore";
import { dataBase } from "../firebase/firebaseConfig";
import { toast } from "react-toastify";

//Crear (METODO POST)
export const registroPeliculaAsincrono = (pelicula) => {
    return (dispatch) => {
        addDoc(collection(dataBase, "peliculasdb"), pelicula)
            .then((resp) => {
                dispatch(registroPeliculaSincrono(pelicula));
                dispatch(listarPeliculasAsincrono());
                toast("Nueva Pelicula Agregada", {
                    type: "success",
                    autoClose: 3000,
                    position: toast.POSITION.TOP_CENTER,
                });
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
            pelis.push({
                ...doc.data(),
            });
        });
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
        const consulta = query(coleccion, where("id", "==", id));
        const datos = await getDocs(consulta);
        datos.forEach((docu) => {
            deleteDoc(doc(dataBase, "peliculasdb", docu.id));
        });
        dispatch(eliminarPeliculaSincrono(id));
        dispatch(listarPeliculasAsincrono());
        toast("Pelicula Eliminada", {
            type: "error",
            autoClose: 3000,
            position: toast.POSITION.TOP_CENTER,
        });
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
        const coleccion = collection(dataBase, "peliculasdb");
        const consulta = query(coleccion, where("nombre", "==", inputText));
        const datos = await getDocs(consulta);
        let peliculaEncontrada = [];
        datos.forEach((dat) => {
            peliculaEncontrada.push(dat.data());
        });
        console.log(peliculaEncontrada);
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
export const actualizarPeliculaASincrono = (pelicula) => {
    return async (dispatch) => {
        const coleccion = collection(dataBase, "peliculasdb");
        const consulta = query(coleccion, where("id", "==", pelicula.id));
        const datos = await getDocs(consulta);
        datos.forEach((docu) => {
            const nuevoscampos = {
                nombre: pelicula.nombre,
                año: pelicula.año,
                genero: pelicula.genero,
                duracion: pelicula.duracion,
                calificacion: pelicula.calificacion,
                sinopsis: pelicula.sinopsis,
            };
            updateDoc(doc(dataBase, "peliculasdb", docu.id), nuevoscampos);
        });
        dispatch(listarPeliculasAsincrono());
        toast("Pelicula Modificada", {
            type: "info",
            autoClose: 3000,
            position: toast.POSITION.TOP_CENTER,
        });
    };
};

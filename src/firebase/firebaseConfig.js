import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBGpCc7MWyli1pTnhc_43U5vemEOwPBoic",
    authDomain: "blockmasterapp-1cdc0.firebaseapp.com",
    projectId: "blockmasterapp-1cdc0",
    storageBucket: "blockmasterapp-1cdc0.appspot.com",
    messagingSenderId: "835651245252",
    appId: "1:835651245252:web:257aa6dac8def4abe76591",
};

const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const dataBase = getFirestore();

export { app, google, facebook, dataBase };

import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDL0g6XJ-BjBQjXNAu0gaXZBNLRcI6Opvw",
    authDomain: "blockmasterapp-f8bbb.firebaseapp.com",
    projectId: "blockmasterapp-f8bbb",
    storageBucket: "blockmasterapp-f8bbb.appspot.com",
    messagingSenderId: "612720648384",
    appId: "1:612720648384:web:83632781c04b408c690d25",
};

const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const dataBase = getFirestore();

export { app, google, facebook, dataBase };

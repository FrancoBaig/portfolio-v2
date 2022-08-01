import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBWxd0bYiKW6G24NmsejDhwF__d1oDHUi0",
    authDomain: "portfolio-24641.firebaseapp.com",
    projectId: "portfolio-24641",
    storageBucket: "portfolio-24641.appspot.com",
    messagingSenderId: "53703942789",
    appId: "1:53703942789:web:5aac77d8856cc67112bfec",
    measurementId: "G-K54X9JQSWX",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCUdtfcMq8J79IXgPgX_x65hDhQw2KlO0c",
    authDomain: "real-state-web-dev.firebaseapp.com",
    projectId: "real-state-web-dev",
    storageBucket: "real-state-web-dev.firebasestorage.app",
    messagingSenderId: "579502704634",
    appId: "1:579502704634:web:7330a539ef55d9799cc643",
    measurementId: "G-86WZQGVE74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();
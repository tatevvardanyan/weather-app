// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQMvessKyox0hJvEx3DbcQfwufvpcRf4s",
    authDomain: "weather-app-75725.firebaseapp.com",
    projectId: "weather-app-75725",
    storageBucket: "weather-app-75725.appspot.com",
    messagingSenderId: "405978440815",
    appId: "1:405978440815:web:42f201a8f6e0a7da77599a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1K6oo1jA0bXbc6IE8BKZgM5WLOsC4-Ds",
    authDomain: "weather-app-99294.firebaseapp.com",
    projectId: "weather-app-99294",
    storageBucket: "weather-app-99294.appspot.com",
    messagingSenderId: "678218024277",
    appId: "1:678218024277:web:8c9b3b9800f1646be99bdc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
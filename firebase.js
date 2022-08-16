// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCWFgoNOfCOJKFWEQMONvpDVjP7HX1R8V4",
    authDomain: "portfolio-2-adham.firebaseapp.com",
    projectId: "portfolio-2-adham",
    storageBucket: "portfolio-2-adham.appspot.com",
    messagingSenderId: "391262927540",
    appId: "1:391262927540:web:4e113f836b4734dbbdb5e1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { db };

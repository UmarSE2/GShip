// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBM7SiUQ1Oz27hXPzsTeejXEzyMbUTCDgA",
    authDomain: "gshipapp.firebaseapp.com",
    projectId: "gshipapp",
    storageBucket: "gshipapp.appspot.com",
    messagingSenderId: "76095263989",
    appId: "1:76095263989:web:1c2cae48981849d565e1bc",
    measurementId: "G-YHTVE55MGW"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// import firebase from 'firebase';
// const firebaseConfig = {
//     apiKey: "AIzaSyBM7SiUQ1Oz27hXPzsTeejXEzyMbUTCDgA",
//     authDomain: "gshipapp.firebaseapp.com",
//     projectId: "gshipapp",
//     storageBucket: "gshipapp.appspot.com",
//     messagingSenderId: "76095263989",
//     appId: "1:76095263989:web:1c2cae48981849d565e1bc",
//     measurementId: "G-YHTVE55MGW"
// };

// firebase.initializeApp(firebaseConfig);

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAtokOCtjSlLROhIOttwOO0Qi6F4kvFmAE",
    authDomain: "mytown-c9431.firebaseapp.com",
    projectId: "mytown-c9431",
    storageBucket: "mytown-c9431.appspot.com",
    messagingSenderId: "1082234765305",
    appId: "1:1082234765305:web:6bc0ef54158ea3d802c728",
    measurementId: "G-MVH0DEZ451"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
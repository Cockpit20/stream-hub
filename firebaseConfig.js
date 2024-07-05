// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCtdhqqR8ZQV2YgxGsqkag0kW8_dT0DMBE",
    authDomain: "stream-hub-b6c9f.firebaseapp.com",
    projectId: "stream-hub-b6c9f",
    storageBucket: "stream-hub-b6c9f.appspot.com",
    messagingSenderId: "524328873569",
    appId: "1:524328873569:web:42113aeecfc81bd5080420",
    measurementId: "G-HD49FJGSTV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics } 
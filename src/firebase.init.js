// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAbNpVLllvI9lKBI9_KY1aHemnqMRLAP_c",
    authDomain: "ema-jhon-simple-d7e33.firebaseapp.com",
    projectId: "ema-jhon-simple-d7e33",
    storageBucket: "ema-jhon-simple-d7e33.appspot.com",
    messagingSenderId: "914199362659",
    appId: "1:914199362659:web:55268446fa2fdc6f5f4c56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
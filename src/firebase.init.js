// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCotF7hqfM8gi0Guo34_ggWnVS7ijksaQ0",
    authDomain: "car-zone-885e1.firebaseapp.com",
    projectId: "car-zone-885e1",
    storageBucket: "car-zone-885e1.appspot.com",
    messagingSenderId: "165739122158",
    appId: "1:165739122158:web:9ea82c910454d877afd2ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
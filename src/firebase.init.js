// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxIBFmxwUmKSaerOWE0Jqje4fc4emYFNI",
  authDomain: "pharmecy-management-firebase.firebaseapp.com",
  projectId: "pharmecy-management-firebase",
  storageBucket: "pharmecy-management-firebase.appspot.com",
  messagingSenderId: "533090694614",
  appId: "1:533090694614:web:8a086989e6233ce2506077"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;

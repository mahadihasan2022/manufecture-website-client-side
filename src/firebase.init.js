// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMsA7US2iSG2_Rm1Uh-Ccw5E-vlOXDEyY",
  authDomain: "manufacturer-website-f1da6.firebaseapp.com",
  projectId: "manufacturer-website-f1da6",
  storageBucket: "manufacturer-website-f1da6.appspot.com",
  messagingSenderId: "656577904687",
  appId: "1:656577904687:web:78f137d25d3956496746da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
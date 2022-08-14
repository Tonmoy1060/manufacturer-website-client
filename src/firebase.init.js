// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB2leinbrbLAdJ03NG_wRtQv2Tn2XNzvQ",
  authDomain: "manufacturer-camera-house.firebaseapp.com",
  projectId: "manufacturer-camera-house",
  storageBucket: "manufacturer-camera-house.appspot.com",
  messagingSenderId: "896586452418",
  appId: "1:896586452418:web:26ae29c7d3689fb6b0da5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
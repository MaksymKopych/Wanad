// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyBnuMUTXgBHMa0UudLlUtqmo0MiRXFnNxI",
  authDomain: "wanad-kalc.firebaseapp.com",
  databaseURL:
    "https://wanad-kalc-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "wanad-kalc",
  storageBucket: "wanad-kalc.appspot.com",
  messagingSenderId: "760624580082",
  appId: "1:760624580082:web:a35a497f8f2c50f972d76b",
  measurementId: "G-NLNSLQ73YF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;

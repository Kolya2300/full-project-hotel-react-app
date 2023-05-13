// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmF9QZi8hGIfG3dBU6L8U3ot5UgkIZVMs",
  authDomain: "auth-firebase-1380f.firebaseapp.com",
  projectId: "auth-firebase-1380f",
  storageBucket: "auth-firebase-1380f.appspot.com",
  messagingSenderId: "297970648987",
  appId: "1:297970648987:web:41d8b2a16ff20498ca033e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app
export const db = getFirestore(app) 
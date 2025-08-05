// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY6mSp8HO9LbRO0i0yKr8FnlAIjamJM5c",
  authDomain: "react-blog-app-39526.firebaseapp.com",
  projectId: "react-blog-app-39526",
  storageBucket: "react-blog-app-39526.firebasestorage.app",
  messagingSenderId: "868352212029",
  appId: "1:868352212029:web:3fb058d4adef7122a27e54",
  measurementId: "G-JNL11G82HG"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseAuth=getAuth(app)
export {app,firebaseAuth}
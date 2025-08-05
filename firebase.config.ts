// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebasedata from "./firevase-data";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: firebasedata.apiKey,
  authDomain:firebasedata.authDomain,
  projectId: firebasedata.projectId,
  storageBucket:firebasedata.storageBucket,
  messagingSenderId: firebasedata.messagingSenderId,
  appId: firebasedata.appId,
  measurementId:firebasedata.measurementId
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseAuth=getAuth(app)
export {app,firebaseAuth}
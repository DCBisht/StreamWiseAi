// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAz_M3xTsKvfHvVcAVMZPtCpfUmoWLnlP8",
  authDomain: "streamwiseai.firebaseapp.com",
  projectId: "streamwiseai",
  storageBucket: "streamwiseai.appspot.com",
  messagingSenderId: "254530290916",
  appId: "1:254530290916:web:09886fdb79689d16d498f1",
  measurementId: "G-JS8B9H2JLE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
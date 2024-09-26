// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIDo8D2e1JiirNjMxHIMHK_x4f3Gu_s7A",
  authDomain: "intellex-48404.firebaseapp.com",
  projectId: "intellex-48404",
  storageBucket: "intellex-48404.appspot.com",
  messagingSenderId: "569509918941",
  appId: "1:569509918941:web:7454bcff0f670726700334",
  measurementId: "G-ZF7SVVMVKX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
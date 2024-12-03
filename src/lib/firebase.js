// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD45cL_WsFJOaWP851J58_bWajUmA-aj_k",
  authDomain: "my-web-site-8e13e.firebaseapp.com",
  projectId: "my-web-site-8e13e",
  storageBucket: "my-web-site-8e13e.firebasestorage.app",
  messagingSenderId: "658057798474",
  appId: "1:658057798474:web:8fe5e9ff5ad19e6e6357b3",
  measurementId: "G-MJ5GWKPQ9H"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export { app, analytics }
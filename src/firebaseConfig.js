// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKIV_sou9VPY6zKTVTeUh8p5B-uDBG2ug",
  authDomain: "tolobelardc.firebaseapp.com",
  projectId: "tolobelardc",
  storageBucket: "tolobelardc.appspot.com",
  messagingSenderId: "1054709621102",
  appId: "1:1054709621102:web:8fe0223a78e416aff8217f",
  measurementId: "G-6N80EGKDBD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth, app}

//const analytics = getAnalytics(app);
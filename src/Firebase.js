// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBvWdRSzlvcfk2ZWPfmPv7fQVX1q78RZU",
  authDomain: "portfolio-135cc.firebaseapp.com",
  projectId: "portfolio-135cc",
  storageBucket: "portfolio-135cc.appspot.com",
  messagingSenderId: "1096150947477",
  appId: "1:1096150947477:web:f170f0fd0afdb218fced9c",
  measurementId: "G-59Y9R4WLHE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
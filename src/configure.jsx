// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmIM8gmWQ7hOT3z9x0QsC2LCw8a8jNYTc",
  authDomain: "demoproj-4f312.firebaseapp.com",
  projectId: "demoproj-4f312",
  storageBucket: "demoproj-4f312.firebasestorage.app",
  messagingSenderId: "1077860240657",
  appId: "1:1077860240657:web:3130ae23cbc759c924d0b0",
  measurementId: "G-NB0Y34NFZB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

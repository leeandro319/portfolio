import firebase from "firebase/app";
import "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5ZyaoWt9H9WQ0qAIQZCB-aeYYiYckmv4",
  authDomain: "portifolio-d225a.firebaseapp.com",
  databaseURL: "https://portifolio-d225a.firebaseio.com",
  projectId: "portifolio-d225a",
  storageBucket: "portifolio-d225a.appspot.com",
  messagingSenderId: "331536622253",
  appId: "1:331536622253:web:1f0b9846f48f96eb7d9c24",
  measurementId: "G-EVBSR50ML3",
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);

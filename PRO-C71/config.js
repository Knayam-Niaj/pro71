import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
    const firebaseConfig = {
    apiKey: "AIzaSyD4VMoYFGp1ZUYRYFmWFzTB3NHMe1C6nFU",
    authDomain: "pro71-7c949.firebaseapp.com",
    projectId: "pro71-7c949",
    storageBucket: "pro71-7c949.appspot.com",
    messagingSenderId: "1029621863887",
    appId: "1:1029621863887:web:6e0dad8a8d9102ba21eeba"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

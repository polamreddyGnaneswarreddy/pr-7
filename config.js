import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyC9DMOYw3BTGCJ1zxkWblNzNhrWQmJJWPI",
    authDomain: "e-ride-1ff01.firebaseapp.com",
    projectId: "e-ride-1ff01",
    storageBucket: "e-ride-1ff01.appspot.com",
    messagingSenderId: "832741447234",
    appId: "1:832741447234:web:2452b7c5606a4e8bd8bfdb"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

/*import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "*******************************",
    authDomain: "olxapp-8af64.firebaseapp.com",
    projectId: "olxapp-8af64",
    storageBucket: "olxapp-8af64.appspot.com",
    messagingSenderId: "1014562744966",
    appId: "1:1014562744966:web:4067314b9af27b1ae37f07",
    measurementId: "G-P9Z51T2HE5"
  };


  export default firebase.initializeApp(firebaseConfig)*/

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/auth";
//import 'firebase/firebase'
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: "olxapp-8af64.firebaseapp.com",
  projectId: "olxapp-8af64",
  storageBucket: "olxapp-8af64.appspot.com",
  messagingSenderId: "1014562744966",
  appId: "1:1014562744966:web:4067314b9af27b1ae37f07",
  measurementId: "G-P9Z51T2HE5",
};

firebase.initializeApp(firebaseConfig);

export default firebase;

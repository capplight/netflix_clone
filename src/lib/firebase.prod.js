import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// we need to seed the database

// we need to config here
const config = {
  apiKey: "AIzaSyD4HYtE0ww936l71LiODoh54hG2TBBW8Ac",
  authDomain: "netflix-36ffd.firebaseapp.com",
  projectId: "netflix-36ffd",
  storageBucket: "netflix-36ffd.appspot.com",
  messagingSenderId: "409882143525",
  appId: "1:409882143525:web:ec8e84900308f0a65408cc",
};

const firebase = Firebase.initializeApp(config);

export { firebase };

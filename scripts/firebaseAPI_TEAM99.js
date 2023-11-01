//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyB8bpqsFX7JS8RUUdHeOWDfU7Fzv2v9ZE4",
  authDomain: "comp1800-7831e.firebaseapp.com",
  projectId: "comp1800-7831e",
  storageBucket: "comp1800-7831e.appspot.com",
  messagingSenderId: "651951442983",
  appId: "1:651951442983:web:4c899638f96b04d41a9202"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
import firebase from 'firebase'

import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB9D1_17vu_XDCU3cESXJRp93VHeY7d4Dg",
    authDomain: "raisedbar-410b3.firebaseapp.com",
    projectId: "raisedbar-410b3",
    storageBucket: "raisedbar-410b3.appspot.com",
    messagingSenderId: "33427983644",
    appId: "1:33427983644:web:049f9a0bbe5d991b417ed9",
    measurementId: "G-065LBJ0JC6"
  };


firebase.initializeApp(firebaseConfig);

export default firebase;

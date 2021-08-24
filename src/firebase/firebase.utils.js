import firebase from "firebase/app";

import 'firebase/firestore';

import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBlDrOsAG4F2L2DlD3-3Rur-4EH0LNtq0k",
    authDomain: "crwn-db-4c6df.firebaseapp.com",
    projectId: "crwn-db-4c6df",
    storageBucket: "crwn-db-4c6df.appspot.com",
    messagingSenderId: "974956347459",
    appId: "1:974956347459:web:d1b771df1777b2fd28d4f6",
    measurementId: "G-TYK8N18DE2"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCkAha4F4qLgjZiif8pz692pFBT2vlWzAA",
    authDomain: "cbstore-e46bc.firebaseapp.com",
    databaseURL: "https://cbstore-e46bc.firebaseio.com",
    projectId: "cbstore-e46bc",
    storageBucket: "cbstore-e46bc.appspot.com",
    messagingSenderId: "501249587497",
    appId: "1:501249587497:web:11ce60a343b6e1ae5b9f38",
    measurementId: "G-4BK3D71G0V"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
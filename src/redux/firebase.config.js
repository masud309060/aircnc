import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDZ2nE5ofQmpFVQCgAPWUpfFns8N7kT1y0",
  authDomain: "aircnc-hotels.firebaseapp.com",
  projectId: "aircnc-hotels",
  storageBucket: "aircnc-hotels.appspot.com",
  messagingSenderId: "693478941939",
  appId: "1:693478941939:web:8713e7cce59c6a021a0386"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebaseApp.auth();
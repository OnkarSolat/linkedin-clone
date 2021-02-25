import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDMgXQLRI0jNB6_mZaVBx2FSBrvJ8sYxy0",
    authDomain: "linkedin-clone-ecb4a.firebaseapp.com",
    projectId: "linkedin-clone-ecb4a",
    storageBucket: "linkedin-clone-ecb4a.appspot.com",
    messagingSenderId: "232301530195",
    appId: "1:232301530195:web:81237a62bf63220d42caa6",
    measurementId: "G-NB3250RELM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db , auth};
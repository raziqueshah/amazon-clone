import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAPn3XGhuEHuqG5QHHPyqZPJbzlsKiqxUk",
  authDomain: "e-clone-5cb9b.firebaseapp.com",
  projectId: "e-clone-5cb9b",
  storageBucket: "e-clone-5cb9b.appspot.com",
  messagingSenderId: "499782340335",
  appId: "1:499782340335:web:472fdc79225233ac70951a"
};


// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
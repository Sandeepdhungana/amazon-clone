import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDhOj5uLpyCWURI9sM1eqrGNCsT41lKhEY",
  authDomain: "clone-c6675.firebaseapp.com",
  projectId: "clone-c6675",
  storageBucket: "clone-c6675.appspot.com",
  messagingSenderId: "963126699327",
  appId: "1:963126699327:web:1cfeedcffea69b2c585f8a",
  measurementId: "G-XEH802GCR3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDPRLPptGLevD0KfTe-lY78DCJZXe21BYQ",
  authDomain: "netflix-fcfeb.firebaseapp.com",
  projectId: "netflix-fcfeb",
  storageBucket: "netflix-fcfeb.appspot.com",
  messagingSenderId: "42532569669",
  appId: "1:42532569669:web:d360a89305ab0b7729192c",
};
const firebaseAdmin = firebase.initializeApp(firebaseConfig);
const db = firebaseAdmin.firestore();
const auth = firebase.auth();
const analytics = firebase.analytics();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider, analytics };

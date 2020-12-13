import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAOWOPM2Kg0wJbK5n4kkEh-h4yw586K5JE",
  authDomain: "whats-app-clone-2ff9e.firebaseapp.com",
  databaseURL: "https://whats-app-clone-2ff9e.firebaseio.com",
  projectId: "whats-app-clone-2ff9e",
  storageBucket: "whats-app-clone-2ff9e.appspot.com",
  messagingSenderId: "754897934421",
  appId: "1:754897934421:web:6004b8052b4acb633c1cdc",
  measurementId: "G-CVQTE4782P"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth , provider};
export default db;
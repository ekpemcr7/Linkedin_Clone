import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAq8Y0njNDRNO_5bPIOk4rUuNk4EQ5Q4mk",
  authDomain: "linkedin-clone-48b49.firebaseapp.com",
  projectId: "linkedin-clone-48b49",
  storageBucket: "linkedin-clone-48b49.appspot.com",
  messagingSenderId: "599903329349",
  appId: "1:599903329349:web:48ff7e8cd0310dd64c172c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

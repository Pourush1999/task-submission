import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDs2MBvU_k2P-FGqA_bvLvulRBm2sO1Kck",
    authDomain: "task-classroom.firebaseapp.com",
    databaseURL: "https://task-classroom-default-rtdb.firebaseio.com",
    projectId: "task-classroom",
    storageBucket: "task-classroom.appspot.com",
    messagingSenderId: "65695760668",
    appId: "1:65695760668:web:32b52fcc4636335207fad9",
    measurementId: "G-1V3RR98CC2"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

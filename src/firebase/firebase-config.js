import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const  firebaseConfig = {
    apiKey: "AIzaSyAeprNMT_4Ttij2oPrOHi3eC7QuhW9Nack",
    authDomain: "journalapp-a4f4a.firebaseapp.com",
    projectId: "journalapp-a4f4a",
    storageBucket: "journalapp-a4f4a.appspot.com",
    messagingSenderId: "1014485328530",
    appId: "1:1014485328530:web:0ad88b88c137d2302cbc4b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}
// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCoLfDRqTBnKeOjIwfsrLBSktwXOWN-zDY",
    authDomain: "period-tracker-47c98.firebaseapp.com",
    databaseURL: "https://period-tracker-47c98-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "period-tracker-47c98",
    storageBucket: "period-tracker-47c98.appspot.com",
    messagingSenderId: "193262028171",
    appId: "1:193262028171:web:11dcbe8fc2ef6975331b8e",
    measurementId: "G-XQWK09CXJJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

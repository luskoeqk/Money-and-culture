
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "money-and-culture.firebaseapp.com",
    projectId: "money-and-culture",
    storageBucket: "money-and-culture.appspot.com",
    messagingSenderId: "625179613928",
    appId: "1:625179613928:web:f8eb059539bcaf54c0c75d",
    measurementId: "G-96YP5RF33E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreFirebase = getFirestore(app);

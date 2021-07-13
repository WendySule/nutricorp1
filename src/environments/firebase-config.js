import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = { apiKey: "AIzaSyBtyIUrqeAg6AkgIZzVccHcG4rb-ZUriDo", authDomain: "credicorp01-d7138.firebaseapp.com", databaseURL: "https://credicorp01-d7138-default-rtdb.firebaseio.com", projectId: "credicorp01-d7138", storageBucket: "credicorp01-d7138.appspot.com", messagingSenderId: "223031258472", appId: "1:223031258472:web:c2143bc1a296b1fb413add", measurementId: "G-0X00CYK725" };

// Initialize Firebase

export const fb = firebase.initializeApp(firebaseConfig);
// export const db = fb.firestore()
// export const auth1 = fb.auth()




















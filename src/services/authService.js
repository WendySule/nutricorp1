import {fb}from '../environments/firebase-config'
import 'firebase/auth'

export const logInAuth = (email, password) => fb.auth().signInWithEmailAndPassword(email,password)

export const signOutAuth = () => fb.auth().signOut() ;


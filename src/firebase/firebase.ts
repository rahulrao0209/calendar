import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore"; 
import type { User, UserForDatabase } from "../types/types";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxSrbosYc19nIzcwKVwW2KyS67YvSsYcg",
  authDomain: "calendar-c03b4.firebaseapp.com",
  projectId: "calendar-c03b4",
  storageBucket: "calendar-c03b4.appspot.com",
  messagingSenderId: "913327772781",
  appId: "1:913327772781:web:6ac962865a2df31a79db64"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firestoreDb = getFirestore(firebaseApp);

// Signup a new user
export const signupNewUser = async (user: User, error = '') => {
  try {
    if(error !== '') throw new Error(error);
    
    const userCredentials = await createUserWithEmailAndPassword(firebaseAuth, user.email, user.password);
    
    const userForDatabase = {
      id: userCredentials.user.uid,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email
    }

    // Add user to firestore users collection
    addUserToFirestore(userForDatabase);

  } catch(err) {
    console.log("SIGNUP AUTH ERROR: ", err);
  }
}

export const signInUser = async (user: User, error = '') => {
  try {
    if(error !== '') throw new Error(error);
    const userCredentials = await signInWithEmailAndPassword(firebaseAuth, user.email, user.password);
    const signedInUser = userCredentials.user;
    console.log("SignedIn user: ", signedInUser);
  } catch(err) {
    console.log("SIGNIN AUTH ERROR: ", err);
  }
}

export const addUserToFirestore = async (user: UserForDatabase) => {
  try {
    const docRef = await addDoc(collection(firestoreDb, "users"), user);
    console.log("Document written with ID: ", docRef.id);
  } catch (err) {
    console.error("Error adding document: ", err);
  }
};
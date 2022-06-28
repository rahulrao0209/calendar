import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, getDoc, doc, setDoc } from "firebase/firestore"; 
import type { User, UserForDatabase, LoggedInUser } from "../types/types";

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
      userId: userCredentials.user.uid,
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

export const signInUser = async (user: LoggedInUser, error = '') => {
  try {
    if(error !== '') throw new Error(error);
    const userCredentials = await signInWithEmailAndPassword(firebaseAuth, user.email, user.password);
    const signedInUserId = userCredentials.user.uid;

    return getUserFromFirestore(signedInUserId);

  } catch(err) {
    console.log("SIGNIN AUTH ERROR: ", err);
  }
}

const addUserToFirestore = async (user: UserForDatabase) => {
  try {
    await setDoc(doc(firestoreDb, "users", user.userId), user);
    console.log("User authenticated and persisted in firestore");
  } catch (err) {
    console.error("Error setting document in the users collection: ", err);
  }
};

const getUserFromFirestore = async (userId: string) => {  
  const docRef = doc(firestoreDb, "users", userId);
  const docSnap = await getDoc(docRef);

  if(!docSnap) return;

  return docSnap.data();
}

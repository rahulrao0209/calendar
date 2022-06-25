import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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

// Signup a new user
export const signupNewUser = async (email: string, password: string, error = '') => {
  try {
    if(error !== '') throw new Error(error);
    const userCredentials = await createUserWithEmailAndPassword(firebaseAuth, email, password);
    const user = userCredentials.user;

    console.log("SIGNED UP USER: ", user);
    
  } catch(err) {
    console.log("AUTH ERROR: ", err);
  }
}
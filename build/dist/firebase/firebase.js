import {initializeApp} from "../../_snowpack/pkg/firebase/app.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "../../_snowpack/pkg/firebase/auth.js";
import {getFirestore, getDoc, doc, setDoc} from "../../_snowpack/pkg/firebase/firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyAxSrbosYc19nIzcwKVwW2KyS67YvSsYcg",
  authDomain: "calendar-c03b4.firebaseapp.com",
  projectId: "calendar-c03b4",
  storageBucket: "calendar-c03b4.appspot.com",
  messagingSenderId: "913327772781",
  appId: "1:913327772781:web:6ac962865a2df31a79db64"
};
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firestoreDb = getFirestore(firebaseApp);
export const signupNewUser = async (user, error = "") => {
  try {
    if (error !== "")
      throw new Error(error);
    const userCredentials = await createUserWithEmailAndPassword(firebaseAuth, user.email, user.password);
    const userForDatabase = {
      userId: userCredentials.user.uid,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email
    };
    addUserToFirestore(userForDatabase);
  } catch (err) {
    console.log("SIGNUP AUTH ERROR: ", err);
  }
};
export const signInUser = async (user, error = "") => {
  try {
    if (error !== "")
      throw new Error(error);
    const userCredentials = await signInWithEmailAndPassword(firebaseAuth, user.email, user.password);
    const signedInUserId = userCredentials.user.uid;
    return getUserFromFirestore(signedInUserId);
  } catch (err) {
    console.log("SIGNIN AUTH ERROR: ", err);
  }
};
const addUserToFirestore = async (user) => {
  try {
    await setDoc(doc(firestoreDb, "users", user.userId), user);
    console.log("User authenticated and persisted in firestore");
  } catch (err) {
    console.error("Error setting document in the users collection: ", err);
  }
};
const getUserFromFirestore = async (userId) => {
  const docRef = doc(firestoreDb, "users", userId);
  const docSnap = await getDoc(docRef);
  if (!docSnap)
    return;
  return docSnap.data();
};

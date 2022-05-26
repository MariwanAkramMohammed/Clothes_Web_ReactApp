import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Config = {
  apiKey: "AIzaSyA7v5rswOoEhelEg8KjBELCsGdOMgz1DMw",
  authDomain: "clothes-9027f.firebaseapp.com",
  projectId: "clothes-9027f",
  storageBucket: "clothes-9027f.appspot.com",
  messagingSenderId: "760252737050",
  appId: "1:760252737050:web:04682f58e681ca9d6253a3",
  measurementId: "G-CD6KX8Z843",
};

const App = initializeApp(Config);
const Provider = new GoogleAuthProvider();
export const auth = getAuth();
const HandelSign = () => {
  signInWithPopup(auth, Provider);
};
export const db = getFirestore(App);
// console.log(`this is your error`);
export const createUserAcount = async (userAuth, additionData) => {
  if (!userAuth) return;
  const userRef = doc(db, "users", `${userAuth.uid}`);
  const SnapShot = await getDoc(userRef);
  if (!SnapShot.exists()) {
    const { displayName: name, email } = userAuth;
    const current_Data = new Date();
    try {
      await setDoc(userRef, {
        name,
        email,
        current_Data,
        ...additionData,
      });
    } catch (error) {
      console.log(`this is your error`, error.message);
    }
  }
  return userRef;
};

export default HandelSign;

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
} from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Config = {
  apiKey: "AIzaSyDRjC6vgSlAiKx-B5i2jUbojdZrNIAVMzQ",
  authDomain: "dbclothes-75090.firebaseapp.com",
  projectId: "dbclothes-75090",
  storageBucket: "dbclothes-75090.appspot.com",
  messagingSenderId: "720563125282",
  appId: "1:720563125282:web:c1f26ebc7175a6faa15e7b",
  measurementId: "G-Q7LLQGB2L4"
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
////////////////////////////////////////////////

export const ConvertcollectionToMapAarray = (collection) => {
  const newArrayItem = collection.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return newArrayItem.reduce((accumulator,element)=>{
  accumulator[element.title.toLowerCase()]=element
  return accumulator
  },{});
};

// send data to fire base once
export const AddCollectionAndDocument = async (
  collectionKey,
  documentListArray
) => {
  const ColRef = collection(db, collectionKey);
  // batch gather all of call action or request and pack them and send them in one huge request to web browser
  const batch = writeBatch(db);
  documentListArray.forEach((element) => {
    const DocRef = doc(ColRef);
    batch.set(DocRef, element);
  });
  return await batch.commit(); //this fire off our big request and return promise of null if request will succed
};

export default HandelSign;

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import 'firebase/firestore'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyB4kB9T6hZ89_NTCUt03uxhlo-7LuAJhus",
  authDomain: "olx-clonereactjs.firebaseapp.com",
  projectId: "olx-clonereactjs",
  storageBucket: "olx-clonereactjs.appspot.com",
  messagingSenderId: "1068012897793",
  appId: "1:1068012897793:web:b4c06dc4c7c64028352200",
  measurementId: "G-3NEHWR9QD2"
};
const Firebase = initializeApp(firebaseConfig);

const Firestore = getFirestore(Firebase)
const storage = getStorage(Firebase)
const auth = getAuth(Firebase);


export { auth, Firestore, storage };
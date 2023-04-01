// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"
import {getStorage} from "firebase/storage"
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyA-_y4uAnE50r5bbnvuMk51RMRCtuXXEZE",
  authDomain: "ecomnext-fcb05.firebaseapp.com",
  projectId: "ecomnext-fcb05",
  storageBucket: "ecomnext-fcb05.appspot.com",
  messagingSenderId: "42861101678",
  appId:"1:42861101678:web:8e81ec0bf67797a136dc7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage()
export const db = getFirestore()
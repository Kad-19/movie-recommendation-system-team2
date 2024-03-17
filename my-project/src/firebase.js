import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDGj0PE349_ZI9eb3_atiXYtjgH_JGB7oU",
  authDomain: "cinema-app-d89c5.firebaseapp.com",
  projectId: "cinema-app-d89c5",
  storageBucket: "cinema-app-d89c5.appspot.com",
  messagingSenderId: "402913809671",
  appId: "1:402913809671:web:c55311108d6295200d61a2",
  measurementId: "G-6MEGRKFQ89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const DB=getFirestore(app)
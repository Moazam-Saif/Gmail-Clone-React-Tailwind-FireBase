
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClGUXj1h9X9Zuvq6uMOVmg8nhOSaRvKoA",
  authDomain: "clone-react-9e6f3.firebaseapp.com",
  projectId: "clone-react-9e6f3",
  storageBucket: "clone-react-9e6f3.firebasestorage.app",
  messagingSenderId: "620874345614",
  appId: "1:620874345614:web:9ec3e6e5851fa866982ddf",
  measurementId: "G-N6L3RCZZ66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();
export const db=getFirestore();
export const provider=new GoogleAuthProvider();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB8Tl2DemeEh3CzSa8hPe2DRe1MdR0bAXY",
  authDomain: "netflixclone-d5070.firebaseapp.com",
  projectId: "netflixclone-d5070",
  storageBucket: "netflixclone-d5070.appspot.com",
  messagingSenderId: "39419716733",
  appId: "1:39419716733:web:7fa8b53e01c2480103bd14",
  measurementId: "G-4YFFFHSS0J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();
export default app
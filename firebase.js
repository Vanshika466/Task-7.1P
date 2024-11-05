// Imported the functions needed from the SDKs 
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; 

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ_OoPYQq5pyNMpizfSnO7yetjyEI6a_0",
  authDomain: "dev-deakin-6e6ad.firebaseapp.com",
  projectId: "dev-deakin-6e6ad",
  storageBucket: "dev-deakin-6e6ad.appspot.com",
  messagingSenderId: "950907234460",
  appId: "1:950907234460:web:08f3093f4157f63e9da559"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

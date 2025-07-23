// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmf51EVlG1P932OuCOKVHccqJdaNuqp4w",
  authDomain: "myecom-427bc.firebaseapp.com",
  projectId: "myecom-427bc",
  storageBucket: "myecom-427bc.firebasestorage.app",
  messagingSenderId: "454546010638",
  appId: "1:454546010638:web:f9cfe78e48aad42c44425f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }
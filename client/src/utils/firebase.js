
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interview-agent-777.firebaseapp.com",
  projectId: "interview-agent-777",
  storageBucket: "interview-agent-777.firebasestorage.app",
  messagingSenderId: "232766793729",
  appId: "1:232766793729:web:a069b6c950d7bb5fdbf800"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}
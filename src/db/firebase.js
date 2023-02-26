import { GoogleAuthProvider, getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCetzodr86edgKsmDbEbjK4y-_5jPxKcLU",
  authDomain: "clone-98887.firebaseapp.com",
  projectId: "clone-98887",
  storageBucket: "clone-98887.appspot.com",
  messagingSenderId: "1060834082705",
  appId: "1:1060834082705:web:d277321eb2e67fc1b56430",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export { db, auth, provider };

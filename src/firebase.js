import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage  } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBWbqqFIN3p_NnVcccSrPxdHwaUF_pMtec",
  authDomain: "student-attandance-system.firebaseapp.com",
  projectId: "student-attandance-system",
  storageBucket: "student-attandance-system.appspot.com",
  messagingSenderId: "675444929179",
  appId: "1:675444929179:web:16dea321b341b8ef0a4c3e"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
export const dbs = getDatabase(app);
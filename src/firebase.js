import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDXKH5B-4Y-WE3DTvrf16Lh_1lLPFJxVKY",
  authDomain: "message-7ca5f.firebaseapp.com",
  projectId: "message-7ca5f",
  storageBucket: "message-7ca5f.appspot.com",
  messagingSenderId: "612201766049",
  appId: "1:612201766049:web:3cf6ba5ed2e8ed2787e4e0"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
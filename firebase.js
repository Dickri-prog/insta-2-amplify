// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDUt9ncYqNpvwKJx6KYL2jkmKU2t78yiVo",
    authDomain: "insta-2-1e3a7.firebaseapp.com",
    projectId: "insta-2-1e3a7",
    storageBucket: "insta-2-1e3a7.appspot.com",
    messagingSenderId: "1068423142214",
    appId: "1:1068423142214:web:bfa69fb39d971ae558a347"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth";
import { useState, useEffect } from "react";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDipH3UvoOe0UAftXDnaXtFI6zDt36PqH4",
  authDomain: "travel-advisor-70b3f.firebaseapp.com",
  projectId: "travel-advisor-70b3f",
  storageBucket: "travel-advisor-70b3f.appspot.com",
  messagingSenderId: "849078183680",
  appId: "1:849078183680:web:5803edfb31cb76416cb5e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();

export function signup(email, password){
    return createUserWithEmailAndPassword(auth, email, password)
}

export function login(email, password){
    return signInWithEmailAndPassword(auth, email, password);
}


export function logout(){
    return signOut(auth);   
}

export function useAuth(){
    const [currentUser, setCurrentUser]=useState();

    useEffect(() => {
      const unsub= onAuthStateChanged(auth, user =>{
          setCurrentUser(user);
      })

      return unsub;
    }, [])
    
    return currentUser;
}
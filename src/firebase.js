import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyApyeCQSO9HWrC1jxsjQkCcGEHuu6xcN8o",
  authDomain: "chat-application-21e21.firebaseapp.com",
  projectId: "chat-application-21e21",
  storageBucket: "chat-application-21e21.appspot.com",
  messagingSenderId: "67476163850",
  appId: "1:67476163850:web:baf2f4274cd9dccdd7bef3"
}).auth();
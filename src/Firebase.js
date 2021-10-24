// import firebase from 'firebase/compat/app';
// import "firebase/auth" 
import firebase from "firebase/compat";
import "firebase/auth"

export const auth = firebase.initializeApp( {
    apiKey: "AIzaSyCPpfMwJvkEq6zm6Sn016JNyoNVRwNmy-I",
    authDomain: "chekhabar-4ffc8.firebaseapp.com",
    projectId: "chekhabar-4ffc8",
    storageBucket: "chekhabar-4ffc8.appspot.com",
    messagingSenderId: "693951039220",
    appId: "1:693951039220:web:8681ed986d5fc865e6c0a1"
  }).auth();
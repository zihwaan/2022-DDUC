// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPJqyejfDkUe189O71nP8yq5Zzt7fidHs",
  authDomain: "janggun-aab39.firebaseapp.com",
  projectId: "janggun-aab39",
  storageBucket: "janggun-aab39.appspot.com",
  messagingSenderId: "197916753245",
  appId: "1:197916753245:web:bb3080606c5b94504cbcb4"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig);
}else{
  app = firebase.app();
}

const auth = firebase.auth();
const db = firebase.firestore();

export {auth, db};
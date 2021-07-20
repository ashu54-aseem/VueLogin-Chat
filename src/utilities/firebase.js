import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDqgyYCM0cyTrrYHyHzvrKxvEm4OWNyGwE",
    authDomain: "vue-login-and-chat.firebaseapp.com",
    projectId: "vue-login-and-chat",
    storageBucket: "vue-login-and-chat.appspot.com",
    messagingSenderId: "55086396108",
    appId: "1:55086396108:web:7d82b3ac95672561864869",
    measurementId: "G-X77FHBRKR3"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
export const chatsRef = db.ref("chats");

export default firebase;

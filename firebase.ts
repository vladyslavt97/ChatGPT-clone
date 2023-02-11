import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCl15v5Gab1QAMkXfTtYk3ANvvc2v-gHg",
  authDomain: "chatgpt-clone-5b70d.firebaseapp.com",
  projectId: "chatgpt-clone-5b70d",
  storageBucket: "chatgpt-clone-5b70d.appspot.com",
  messagingSenderId: "66502769695",
  appId: "1:66502769695:web:c67864c2a60ef65998692a"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};
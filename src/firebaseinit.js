// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm5Su7NV1tfRiqj-LUyZpQ_q-bgtj0y78",
  authDomain: "livewell-f1692.firebaseapp.com",
  projectId: "livewell-f1692",
  storageBucket: "livewell-f1692.appspot.com",
  messagingSenderId: "423323850206",
  appId: "1:423323850206:web:ed414f34e203526a43394f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db= getFirestore(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};


// const firebaseConfig = {
//   apiKey: "AIzaSyAcKkTTGPpk_bgdKvpwN2C0qvVAv4TBgG8",
//   authDomain: "assignment-project-852d1.firebaseapp.com",
//   projectId: "assignment-project-852d1",
//   storageBucket: "assignment-project-852d1.appspot.com",
//   messagingSenderId: "958250039671",
//   appId: "1:958250039671:web:7522ff9667c3579c070972"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
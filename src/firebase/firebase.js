import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDt-sWdA0RMEg6wV1-myD4Nda-KMxQ2x_0",
    authDomain: "cpit-405-project.firebaseapp.com",
    projectId: "cpit-405-project",
    storageBucket: "cpit-405-project.firebasestorage.app",
    messagingSenderId: "966472974990",
    appId: "1:966472974990:web:4230c4883f620c2899ffdf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };

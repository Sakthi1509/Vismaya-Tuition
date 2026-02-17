import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// TODO: Replace with your actual Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyByQ57ezicJv371BmujkJe2rqIJu_Lj1ek",
    authDomain: "vismayaachievers.firebaseapp.com",
    databaseURL: "https://vismayaachievers-default-rtdb.firebaseio.com",
    projectId: "vismayaachievers",
    storageBucket: "vismayaachievers.firebasestorage.app",
    messagingSenderId: "843035743857",
    appId: "1:843035743857:web:ce43afee64804075baedd0",
    measurementId: "G-ZWPXY51XWS"
  };

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
export default app;

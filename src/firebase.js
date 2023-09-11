
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCPxiTdPhRvalAkLnsmHBL5vYVdmcXIVhU",
    authDomain: "instagram-clone-a1299.firebaseapp.com",
    projectId: "instagram-clone-a1299",
    storageBucket: "instagram-clone-a1299.appspot.com",
    messagingSenderId: "734195567820",
    appId: "1:734195567820:web:56c84a50ec334a15a18669",
    measurementId: "G-8453W9GH8P"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };

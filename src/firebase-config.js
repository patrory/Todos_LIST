import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCT9xNUsl1lgqkNgcYB-XevXtnd-7NYLqE",
    authDomain: "meow-c5153.firebaseapp.com",
    projectId: "meow-c5153",
    storageBucket: "meow-c5153.appspot.com",
    messagingSenderId: "388064088692",
    appId: "1:388064088692:web:cfc0afa01714af83c2f721"
  };
  
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);
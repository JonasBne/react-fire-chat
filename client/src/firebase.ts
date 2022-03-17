import firebase from 'firebase/compat/app';
// import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD-gtcusMd6k2fpltaKA7YxsY3Oewr1b9o',
  authDomain: 'chat-o-matic.firebaseapp.com',
  databaseURL: 'https://chat-o-matic-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'chat-o-matic',
  storageBucket: 'chat-o-matic.appspot.com',
  messagingSenderId: '958313815470',
  appId: '1:958313815470:web:8d6954773602e6ce8dbc3f',
  measurementId: 'G-51QSBHXEB5',
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = firebase.database();

import React from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

import { getAuth } from 'firebase/auth';
import 'firebase/firestore';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useCollectionData } from 'react-firebase-hooks/firestore';
import Chat from './views/Chat/Chat';

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

const auth = getAuth(app);
const firestoreDb = getFirestore(app);

function App() {
  return (
    <>
      <h1 className="text-2xl font-bold underline">Chat-0-matic</h1>
      <Chat />
    </>
  );
}

export default App;

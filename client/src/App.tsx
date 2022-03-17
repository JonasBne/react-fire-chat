import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Chat from './views/Chat/Chat';
import SignIn from './views/SignIn';
import SignOut from './views/SignOut';

function App() {
  const [user] = useAuthState(auth);

  return (
    <>
      <h1 className="text-2xl font-bold underline">FireChat 🔥 </h1>
      {user ? (
        <>
          <Chat />
          <SignOut />
        </>
      ) : (
        <SignIn />
      )}
    </>
  );
}

export default App;

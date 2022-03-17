import React from 'react';
import Chat from './Chat/Chat';
import SignOut from './SignOut';

function AuthenticatedApp() {
  return (
    <>
      <Chat />
      <SignOut />
    </>
  );
}

export default AuthenticatedApp;

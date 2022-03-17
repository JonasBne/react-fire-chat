import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { User } from '@firebase/auth/dist/auth-public';
import Chat from './Chat/ChatRoom';
import SignOut from './SignOut';

interface AuthenticatedAppProps {
  user: User;
}

function AuthenticatedApp({ user }: AuthenticatedAppProps) {
  console.log('user', user);
  return (
    <>
      <Chat />
      <SignOut />
    </>
  );
}

export default AuthenticatedApp;

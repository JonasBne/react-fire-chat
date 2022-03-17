import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { User } from '@firebase/auth/dist/auth-public';
import ChatRoom from './Chat/ChatRoom';

interface AuthenticatedAppProps {
  user: User;
}

function AuthenticatedApp({ user }: AuthenticatedAppProps) {
  return <ChatRoom user={user} />;
}

export default AuthenticatedApp;

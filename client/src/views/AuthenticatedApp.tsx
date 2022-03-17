import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { User } from '@firebase/auth/dist/auth-public';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import ChatRoom from './Chat/ChatRoom';
import SignOut from './SignOut';

interface AuthenticatedAppProps {
  user: User;
}

const Container = styled.div({
  border: '1px solid yellow',
  height: '75vh',
});

function AuthenticatedApp({ user }: AuthenticatedAppProps) {
  const firstName = user.displayName?.substring(0, user.displayName.indexOf(' '));
  return (
    <>
      <Typography variant="h6" sx={{ color: 'white', textAlign: 'left' }}>
        {`Welcome ${firstName}! Let's start 💬`}{' '}
      </Typography>
      <Container>
        <ChatRoom />
        <SignOut />
      </Container>
    </>
  );
}

export default AuthenticatedApp;

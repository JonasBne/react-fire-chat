import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import CircularProgress from '@mui/material/CircularProgress';
import { auth } from './firebase';
import SignIn from './views/SignIn';
import SignOut from './views/SignOut';
import ChatRoom from './views/Chat/ChatRoom';

const AppContainer = styled(Box)({
  textAlign: 'center',
  maxWidth: '728px',
  margin: '0 auto',
});

const Header = styled.header({
  backgroundColor: '#181717',
  height: '10vh',
  minHeight: '50px',
  color: 'white',
  position: 'fixed',
  width: '100%',
  maxWidth: '728px',
  top: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  zIndex: 99,
  padding: '10px',
  boxSizing: 'border-box',
});

const Section = styled.section({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  minHeight: '100vh',
  backgroundColor: 'rgb(40, 37, 53)',
});

const Title = styled(Typography)({
  fontWeight: 500,
  textAlign: 'center',
  letterSpacing: '1.5px',
  textTransform: 'capitalize',
});

function App() {
  const [user, loading] = useAuthState(auth);

  return (
    <AppContainer>
      <Header>
        <Title variant="h4">firechat 🔥</Title>
        {user && <SignOut />}
      </Header>

      <Section>
        {!loading && !user && <SignIn />}
        {loading && <CircularProgress />}
        {user && <ChatRoom user={user} />}
      </Section>
    </AppContainer>
  );
}

export default App;

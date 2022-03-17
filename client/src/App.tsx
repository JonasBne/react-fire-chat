import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { auth } from './firebase';
import AuthenticatedApp from './views/AuthenticatedApp';
import UnauthenticatedApp from './views/UnauthenticatedApp';

function App() {
  const [user] = useAuthState(auth);

  return (
    <Box
      sx={{
        margin: '48px auto auto auto',
        textAlign: 'center',
        maxWidth: '780px',
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: 500 }}>
        FireChat 🔥
      </Typography>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </Box>
  );
}

export default App;

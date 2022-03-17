import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { Button } from '@mui/material';

function SignOut() {
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth);
  };

  return (
    <Button type="button" variant="outlined" color="error" onClick={handleSignOut}>
      Sign Out
    </Button>
  );
}

export default SignOut;
